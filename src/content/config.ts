import { defineCollection, z } from "astro:content";

const articles = defineCollection({
	type: 'content',
	schema: ({image}) =>  z.object({
		title: z.string(),
		created: z.coerce.date(),
		published: z.coerce.date().optional(),
		cover: image(),
	})
});

const meetupAttendances = defineCollection({
	type: 'content',
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
