import RecenetEntries from "../components/RecentEntries";
import WeeklyActivity from "../components/WeeklyActivity";
import WeeklyGoal from "../components/WeeklyGoal";

export default function Dashboard() {
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