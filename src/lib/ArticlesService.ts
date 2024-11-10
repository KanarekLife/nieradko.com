import { getCollection, type CollectionEntry } from "astro:content";
import type { Article } from "@lib/types";

export async function getArticles(take: number | null = null): Promise<Array<Article>> {
    return await getCollection('articles', filterByPublishDate)
        .then(sortByCreationDate)
        .then(articles => take ? articles.slice(0, take) : articles)
        .then(articles => Promise.all(articles.map(mapToArticle)));
}

function filterByPublishDate(article: CollectionEntry<'articles'>): boolean {
    return !!article.data.published || import.meta.env.DEV;
}

function sortByCreationDate(articles: Array<CollectionEntry<'articles'>>): Array<CollectionEntry<'articles'>> {
    return articles.sort((a,b) => b.data.created.getTime() - a.data.created.getTime());
}

async function mapToArticle(entry: CollectionEntry<'articles'>): Promise<Article> {
    const { remarkPluginFrontmatter } = await entry.render();
    const typedRemarkPluginFrontmatter = remarkPluginFrontmatter as { readingTime: string; };
    return { ...entry, remarkPluginFrontmatter: typedRemarkPluginFrontmatter };
}