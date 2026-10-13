import entries from "../assets/data"
import { EntryData } from "../types/entry"

function lastThree() {
    const getNLastItems = (n: number, array: any) => array.slice(-n)
    const lastThree = getNLastItems(3, entries)
    return (
        lastThree.map((entry: EntryData) => (
            <>
                <p>{entry.title}</p>
                <p>{entry.minutes}m</p>
            </>
        ))
    )
}

export default function RecenetEntries() {
    return (
        <section className="recent-entries">
            <h3>Recent Entries</h3>
            <div>
                {lastThree()}
            </div>
        </section>
    )
}