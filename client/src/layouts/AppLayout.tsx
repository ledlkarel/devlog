import Header from "../components/Header";
import MainContent from "../components/MainContent";
import SideBar from "../components/Sidebar";

export default function AppLayout() {
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