import { Route, Routes } from "react-router-dom"
import Entries from "../pages/Entries"
import Dashboard from "../pages/Dashboard"
import Goals from "../pages/Goals"
import Profile from "../pages/Profile"

export default function MainContent() {
    return (
        <section className="main-content">
            <section className="dashboard-stats" aria-label="Dashboard statistics">
                <span className="stat">[ Streak: 2d ]</span>
                <span className="stat">[ This Week: 4d ]</span>
                <span className="stat">[ Entries: 12 ]</span>
                <span className="stat">[ Best: 7d ]</span>
            </section>
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/entries" element={<Entries />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="profile" element={<Profile />} />
            </Routes>
        </section>
    )
}
