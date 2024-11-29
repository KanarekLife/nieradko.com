import type { CollectionEntry } from "astro:content";

export type Article = CollectionEntry<'articles'> & {
    remarkPluginFrontmatter: {
        readingTime: string;
    }
}

export type MeetupAttendance = CollectionEntry<'meetup_attendances'> & {
    remarkPluginFrontmatter: {
        readingTime: string;
    }
}