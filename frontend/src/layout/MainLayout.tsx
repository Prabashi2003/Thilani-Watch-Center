import { Outlet } from "react-router-dom"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"


function MainLayout() {
  return (
    <div>
     <Navbar />
     <main className="min-h-screen px-26 py-28">
        <Outlet />
     </main>
     <Footer />
    </div>
  )
}

export default MainLayout