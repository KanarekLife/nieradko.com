import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const articles = defineCollection({
	loader: glob({pattern: '**/[^_]*.mdx', base: "src/content/articles"}),
	schema: ({image}) =>  z.object({
		title: z.string(),
		created: z.coerce.date(),
		published: z.coerce.date().optional(),
		cover: image(),
	})
});

const meetupAttendances = defineCollection({
	loader: glob({pattern: '**/[^_]*.mdx', base: "src/content/meetup_attendances"}),
	schema: ({image}) => z.object({
		title: z.string(),
		group: z.string(),
		date: z.coerce.date(),
		cover: image()
	})
})

export const collections = {
	articles,
	meetup_attendances: meetupAttendances
};
