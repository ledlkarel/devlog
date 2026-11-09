import { supabase } from "../lib/supabase";
import type { EntryData } from "../types/entry";

export type EntriesResponse = {
    success: boolean
    data: EntryData[]
}

async function getAccessToken(): Promise<string> {
    const { data, error } = await supabase.auth.getSession();

    if (error || !data.session) {
        throw new Error("You must be logged in");
    }

    return data.session.access_token;
}

export async function getEntries() {

    const defaultOptions = {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    };
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/entries`, defaultOptions)

    if (!response.ok) {
        throw new Error(`Failed to load entries (${response.status})`)
    }

    const result: EntriesResponse = await response.json()
    return result.data
}