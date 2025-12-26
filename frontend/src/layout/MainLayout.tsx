import { Outlet } from "react-router-dom"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"


function MainLayout() {
  return (
    <div className="bg-linear-to-t from-gray-700 via-gray-900 to-black">
     <Navbar />
     <main className="min-h-screen px-26 py-55">
        <Outlet />
     </main>
     <Footer />
    </div>
  )
}

export default MainLayout