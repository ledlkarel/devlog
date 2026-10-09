export default function WeeklyGoal() {
    return (
        <section className="weekly-goal">
            <h3>Weekly Goal</h3>
            <div className="progress">
                <span className="segment filled"></span>
                <span className="segment filled"></span>
                <span className="segment filled"></span>
                <span className="segment filled"></span>
                <span className="segment remaining"></span>
            </div>
        </section>
    )
}