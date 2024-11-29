import { getCollection, type CollectionEntry } from "astro:content";
import type { MeetupAttendance } from "@lib/types";

export async function getMeetupAttendances(take: number | null = null): Promise<Array<MeetupAttendance>> {
    return await getCollection('meetup_attendances')
        .then(sortByDate)
        .then(attendances => take ? attendances.slice(0, take) : attendances)
        .then(attendances => Promise.all(attendances.map(mapToMeetupAttendance)));
}

function sortByDate(attendances: Array<CollectionEntry<'meetup_attendances'>>): Array<CollectionEntry<'meetup_attendances'>> {
    return attendances.sort((a,b) => b.data.date.getTime() - a.data.date.getTime());
}

async function mapToMeetupAttendance(entry: CollectionEntry<'meetup_attendances'>): Promise<MeetupAttendance> {
    const { remarkPluginFrontmatter } = await entry.render();
    const typedRemarkPluginFrontmatter = remarkPluginFrontmatter as { readingTime: string; };
    return { ...entry, remarkPluginFrontmatter: typedRemarkPluginFrontmatter };
}