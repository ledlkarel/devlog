import Entry from "../components/Entry";
import entries from "../assets/data"

export default function Entries() {
    return (
        <div className="entry-container">
            {entries.map((entry) => (
                <Entry key={entry.id} title={entry.title} minutes={entry.minutes} date={entry.date} tags={entry.tags} id={entry.id} />
            ))}
        </div>
    )
}
