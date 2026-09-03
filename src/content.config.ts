import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const news = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
	schema: z.object({
		date: z.coerce.date(),
		category: z.string(),
		title: z.string(),
		text: z.string(),
		image: z.string(),
	}),
})

export const collections = { news }
