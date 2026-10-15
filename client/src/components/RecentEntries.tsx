import entries from "../assets/data"
import { EntryData } from "../types/entry"

function descending() {
    return entries.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

function firstThree() {
    const slicedArray = descending().slice(0, 3)
    return (
        slicedArray.map((entry: EntryData) => (
            <>
                <p key={entry.id}>{entry.title} {entry.minutes}m</p>
            </>
        ))
    )
}

export default function RecenetEntries() {
    return (
        <section className="recent-entries">
            <h3>Recent Entries</h3>
            <div>
                {firstThree()}
            </div>
        </section>
    )
}