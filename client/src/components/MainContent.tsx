import RecenetEntries from "./RecentEntries"
import WeeklyActivity from "./WeeklyActivity"
import WeeklyGoal from "./WeeklyGoal"

export default function MainContent() {
    return (
        <section className="main-content">
            <h1>MAIN CONTENT</h1>
            <section className="main-content-column-container">
                <RecenetEntries />
                <WeeklyGoal />
            </section>
            <WeeklyActivity />
        </section>
    )
} 