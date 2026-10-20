import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { create } from "zustand"
import entriesData from './assets/data'
import { EntryData } from "./types/entry"
import SideBar from './components/Sidebar'
import MainContent from './components/MainContent'
import Header from './components/Header'

export type EntriesState = {
  entries: EntryData[],
  setNewEntry: (entry: EntryData) => void
}

export const dataEntriesStore = create<EntriesState>((set) => ({
  entries: entriesData,
  setNewEntry: (entry) => set((state) => ({ entries: [...state.entries, entry] }))
}))

function App() {

  return (
    <BrowserRouter>
      <SideBar />
      <section className='right-container'>
        <Header />
        <MainContent />
      </section>
    </BrowserRouter>
  )
}

export default App
