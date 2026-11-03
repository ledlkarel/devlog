import { useEffect } from "react"
import { supabase } from "../lib/supabase"
import { useAuthStore } from "../stores/authStore"

export function useAuthSession() {
  const setSession = useAuthStore((state) => state.setSession)

  useEffect(() => {
    let active = true
    let authStateChanged = false

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!active) return

        authStateChanged = true
        setSession(session)
      },
    )

    supabase.auth.getSession()
      .then(({ data, error }) => {
        if (active && !authStateChanged) {
          setSession(error ? null : data.session)
        }
      })
      .catch(() => {
        if (active && !authStateChanged) {
          setSession(null)
        }
      })

    return () => {
      active = false
      subscription.unsubscribe()
    }
  }, [setSession])
}
