import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import NewEntryForm from "./NewEntryForm";

export default function Header() {
    const navigate = useNavigate()

    async function Logout() {
        supabase.auth.signOut()
        navigate("/login", { replace: true })
    }

    return (
        <header className="header">
            <h1>Dashboard</h1>
            <NewEntryForm />
            <button onClick={Logout}>Logout</button>
        </header>
    )
}