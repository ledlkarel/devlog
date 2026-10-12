import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import SideBar from './components/Sidebar'
import MainContent from './components/MainContent'
import Header from './components/Header'

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
