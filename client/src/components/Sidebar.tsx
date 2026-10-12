import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import Entries from "../pages/Entries"

export default function SideBar() {
    return (
        <section className="side-bar">
            <h1>DevLog</h1>
            <nav>
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/entries">Entries</NavLink>
                <NavLink to="/goals">Goals</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
        </section>
    )
}