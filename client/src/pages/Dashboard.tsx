import { useEffect } from "react";
import { create } from "zustand";
import { getEntries } from "../api/entries";
import type { EntryData } from "../types/entry";
import RecenetEntries from "../components/RecentEntries";
import WeeklyActivity from "../components/WeeklyActivity";
import WeeklyGoal from "../components/WeeklyGoal";

export type EntriesState = {
    entries: EntryData[];
    setEntries: (entries: EntryData[]) => void;
};

export const dataEntriesStore = create<EntriesState>((set) => ({
    entries: [],
    setEntries: (entries) => set({ entries }),
}));

export default function Dashboard() {
    const setEntries = dataEntriesStore((state) => state.setEntries);

    useEffect(() => {
        let cancelled = false;
        async function loadEntries() {
            try {
                const entries = await getEntries();
                if (!cancelled) {
                    setEntries(entries);
                }
            } catch (error) {
                console.error("Could not load entries:", error);
            }
        }

        void loadEntries();
        return () => {
            cancelled = true;
        };
    }, [setEntries]);


    return (
        <>
            <section className="main-content-column-container">
                <RecenetEntries />
                <WeeklyGoal />
            </section>
            <WeeklyActivity />
        </>
    )
}