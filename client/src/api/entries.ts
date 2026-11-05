import type { EntryData } from "../types/entry";

type EntriesResponse = {
    success: boolean
    data: EntryData[]
}

export async function getEntries() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/entries`)
    
    if (!response.ok) {
        throw new Error(`Failed to load entries (${response.status})`)
    }

    const result: EntriesResponse = await response.json()
    console.log(result)
    return result.data
}