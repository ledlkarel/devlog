export default function WeeklyActivity() {
    return (
        <section className="weekly-activity">
            <div className="title">Activity this week</div>

            <div className="days">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>

                <span className="box filled"></span>
                <span className="box"></span>
                <span className="box filled"></span>
                <span className="box filled"></span>
                <span className="box filled"></span>
                <span className="box"></span>
                <span className="box"></span>
            </div>
        </section>
    )
}