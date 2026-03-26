'use server';
/**
 * @fileOverview An AI agent that suggests website features based on business type and goals.
 *
 * - suggestWebsiteFeatures - A function that handles the website feature suggestion process.
 * - AiWebsiteFeatureSuggesterInput - The input type for the suggestWebsiteFeatures function.
 * - AiWebsiteFeatureSuggesterOutput - The return type for the suggestWebsiteFeatures function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiWebsiteFeatureSuggesterInputSchema = z.object({
  businessType: z.string().describe('The type of business (e.g., "Local restaurant", "E-commerce store for handmade crafts", "Consulting firm").'),
  businessGoals: z.string().describe('The primary goals of the business for the website (e.g., "Increase online orders", "Generate more leads", "Showcase portfolio", "Automate bookings").'),
});
export type AiWebsiteFeatureSuggesterInput = z.infer<typeof AiWebsiteFeatureSuggesterInputSchema>;

const AiWebsiteFeatureSuggesterOutputSchema = z.object({
  suggestions: z.array(z.object({
    featureName: z.string().describe('The name of the suggested website feature.'),
    description: z.string().describe('A brief description of the feature.'),
    relevanceReason: z.string().describe('Why this feature is relevant for the given business type and goals.'),
  })).describe('A list of suggested website features.'),
});
export type AiWebsiteFeatureSuggesterOutput = z.infer<typeof AiWebsiteFeatureSuggesterOutputSchema>;

export async function suggestWebsiteFeatures(input: AiWebsiteFeatureSuggesterInput): Promise<AiWebsiteFeatureSuggesterOutput> {
  return aiWebsiteFeatureSuggesterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiWebsiteFeatureSuggesterPrompt',
  input: { schema: AiWebsiteFeatureSuggesterInputSchema },
  output: { schema: AiWebsiteFeatureSuggesterOutputSchema },
  prompt: `You are an expert web development consultant specializing in creating modern websites for small businesses and entrepreneurs.

Based on the following business type and goals, suggest 3-5 highly relevant and impactful website features. For each feature, provide a name, a description, and a clear reason why it is relevant for this specific business and its goals.

Business Type: {{{businessType}}}
Business Goals: {{{businessGoals}}}

Consider features that help the business:
- Look professional and build trust
- Generate more leads or sales
- Streamline operations
- Enhance user experience
- Provide bilingual support if applicable (Cristian Digital Studio offers bilingual support)`,
});

const aiWebsiteFeatureSuggesterFlow = ai.defineFlow(
  {
    name: 'aiWebsiteFeatureSuggesterFlow',
    inputSchema: AiWebsiteFeatureSuggesterInputSchema,
    outputSchema: AiWebsiteFeatureSuggesterOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
