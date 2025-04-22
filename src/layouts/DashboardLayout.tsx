import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"
interface DashboardLayoutProps {
    children?: React.ReactNode
}   
const DashboardLayout: React.FC<DashboardLayoutProps>= ({children}) => {
    
    return (
        <div className="flex overflow-hidden h-screen">
            <aside className="bg-pastel-peach">
                <SideBar />
            </aside>
            <main className="flex-1 flex flex-col bg-pastel-pink">
                <header className="h-[6rem] ">
                    <TopBar />
                </header>
                <section className="bg-pastel-yellow flex-1">
                    {children}
                </section>
            </main>
        </div>
    )
}

export default DashboardLayout
