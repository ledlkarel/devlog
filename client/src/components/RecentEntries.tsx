import { dataEntriesStore, EntriesState } from "../App"
import { EntryData } from "../types/entry"

function descending(entries: any) {
    return entries.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

function firstThree(entries: EntriesState) {
    const slicedArray = descending(entries).slice(0, 3)
    return (
        slicedArray.map((entry: EntryData) => (
            <>
                <p key={entry.id}>{entry.title} {entry.minutes}m</p>
            </>
        ))
    )
}

export default function RecenetEntries() {
    const entries = dataEntriesStore((state: any) => state.entries)

    return (
        <section className="recent-entries">
            <h3>Recent Entries</h3>
            <div>
                {firstThree(entries)}
            </div>
        </section>
    )
}