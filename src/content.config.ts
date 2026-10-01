import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/news' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		rawDate: z.string().optional(),
		category: z.string().default('PanneauPocket'),
		image: z.string().optional().default(''),
		imageUrl: z.string().nullable().optional(),
		documentUrl: z.string().nullable().optional(),
		link: z.string().optional(),
		text: z.string().optional(),
	}),
});

export const collections = { news };
