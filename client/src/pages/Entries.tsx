import Entry from "../components/Entry";
// import entries from "../assets/data"
import { dataEntriesStore } from "../App";
import { EntryData } from "../types/entry";

export default function Entries() {
    const data = dataEntriesStore((state: any) => state.entries)

    return (
        <div className="entry-container">
            {data.map((entry: EntryData) => (
                <Entry key={entry.id} title={entry.title} minutes={entry.minutes} date={entry.date} tags={entry.tags} id={entry.id} />
            ))}
        </div>
    )
}
