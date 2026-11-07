import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../stores/authStore"

export default function ProtectedRoute() {
  const session = useAuthStore((state) => state.session)
  const initialized = useAuthStore((state) => state.initialized)

  if (!initialized) {
    return <div role="status">Loading…</div>
  }

  if (!session) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
