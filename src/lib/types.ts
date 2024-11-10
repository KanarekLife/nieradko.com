import type { CollectionEntry } from "astro:content";

export type Article = CollectionEntry<'articles'> & {
    remarkPluginFrontmatter: {
        readingTime: string;
    }
}