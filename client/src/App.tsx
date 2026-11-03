import { BrowserRouter, Routes, Route } from "react-router-dom"
import { create } from "zustand"
import entriesData from './assets/data'
import type { EntryData } from "./types/entry"
import ProtectedRoute from "./components/ProtectedRoute"
import { useAuthSession } from "./hooks/useAuthSession"
import AppLayout from "./layouts/AppLayout"
import Dashboard from "./pages/Dashboard"
import Entries from "./pages/Entries"
import Goals from "./pages/Goals"
import Profile from "./pages/Profile"
import Login from "./pages/Login"

export type EntriesState = {
  entries: EntryData[],
  setNewEntry: (entry: EntryData) => void
}

export const dataEntriesStore = create<EntriesState>((set) => ({
  entries: entriesData,
  setNewEntry: (entry) => set((state) => ({ entries: [...state.entries, entry] }))
}))

function App() {
  useAuthSession()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/entries" element={<Entries />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
