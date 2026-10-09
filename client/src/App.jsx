import './App.css'
import SideBar from './components/Sidebar'
import MainContent from './components/MainContent'
import Header from './components/Header'

function App() {

  return (
    <>
      <SideBar />
      <section className='right-container'>
        <Header />
        <MainContent />
      </section>
    </>
  )
}

export default App
