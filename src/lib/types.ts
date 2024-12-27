import type { CollectionEntry } from "astro:content";

type RemarkPluginFrontmatter = {
    remarkPluginFrontmatter: {
        readingTime: string;
    }
}

export type Article = CollectionEntry<'articles'> & RemarkPluginFrontmatter;
export type MeetupAttendance = CollectionEntry<'meetup_attendances'> & RemarkPluginFrontmatter;

export type AnimationComponentProps = {
    duration?: number;
    delay?: number;
    replayOnEvent?: boolean;
}