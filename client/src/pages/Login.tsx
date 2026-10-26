import type { FormEvent } from "react"
import { supabase } from "../lib/supabase"
import { replace, useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()

    async function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const { error } = await supabase.auth.signInWithPassword({
            email: String(formData.get("email") ?? ""),
            password: String(formData.get("password") ?? ""),
        })

        if (error) {
            console.log(error.message)
            return
        }

        navigate("/", { replace: true })
    }

    return (
        <main className="login-page" aria-labelledby="login-title">
            <div className="login-page__content">
                <header className="login-page__header">
                    <p className="login-page__brand">
                        <span aria-hidden="true">&gt;_</span> DevLog
                    </p>
                </header>
                <form className="login" onSubmit={handleLogin}>
                    <div className="login__field">
                        <label htmlFor="login-email">Email</label>
                        <input
                            id="login-email"
                            name="email"
                            type="email"
                            autoComplete="username"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="login__field">
                        <label htmlFor="login-password">Password</label>
                        <input
                            id="login-password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button className="login__submit" type="submit">
                        Log In <span aria-hidden="true">→</span>
                    </button>
                </form>
            </div>
        </main>
    )
}
