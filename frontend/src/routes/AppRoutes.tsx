import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import SoloPage from "../pages/soloPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import WatchInfo from "../pages/WatchDetails";
import SidebarLayout from "../layout/SlideBar";
import Overview from "../pages/Overview";
import Orders from "../pages/Orders";
import Customers from "../pages/Customers";
import Analytics from "../pages/Analytics";
import Inventory from "../pages/Inventory";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/soloPage" element={<SoloPage />} />
                <Route path="/watchInfo" element={<WatchInfo />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/AboutUs" element={<AboutUs />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Dashboard area with sidebar */}
            <Route path="/dashboard" element={<SidebarLayout />}>
              <Route index element={<Overview />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="orders" element={<Orders />} />
              <Route path="customers" element={<Customers />} />
              <Route path="analytics" element={<Analytics />} />
              
            </Route>


        </Routes>
    );
};

export default AppRoutes;
