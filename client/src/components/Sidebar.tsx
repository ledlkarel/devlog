import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Entries from "../pages/Entries"

export default function SideBar() {
    return (
        <section className="side-bar">
            <h1>DevLog</h1>
            <nav>
                <Link to="/">Dashboard</Link>
                <Link to="/entries">Entries</Link>
                <Link to="/goals">Goals</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </section>
    )
}