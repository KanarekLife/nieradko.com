import { defineCollection, z } from "astro:content";

const articles = defineCollection({
	type: 'content',
	schema: ({image}) =>  z.object({
		title: z.string(),
		created: z.coerce.date(),
		published: z.coerce.date().optional(),
		cover: image().refine((img) => img.width >= 1080),
	})
});

export const collections = {
	articles
};
