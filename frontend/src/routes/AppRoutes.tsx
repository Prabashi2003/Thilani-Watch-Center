import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import WatchInfo from "../pages/WatchDetails";
import SidebarLayout from "../layout/SlideBar";
import Overview from "../pages/Overview";
import Orders from "../pages/Orders";
import Customers from "../pages/Customers";
import Analytics from "../pages/Analytics";
import Inventory from "../pages/Inventory";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/watchInfo" element={<WatchInfo />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
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
