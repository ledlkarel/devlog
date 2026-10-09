import RecenetEntries from "./RecentEntries"
import WeeklyActivity from "./WeeklyActivity"
import WeeklyGoal from "./WeeklyGoal"

export default function MainContent() {
    return (
        <section className="main-content">
            <section className="dashboard-stats" aria-label="Dashboard statistics">
                <span className="stat">[ Streak: 2d ]</span>
                <span className="stat">[ This Week: 4d ]</span>
                <span className="stat">[ Entries: 12 ]</span>
                <span className="stat">[ Best: 7d ]</span>
            </section>
            <section className="main-content-column-container">
                <RecenetEntries />
                <WeeklyGoal />
            </section>
            <WeeklyActivity />
        </section>
    )
}
