import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import SoloPage from "../pages/soloPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import WatchInfo from "../pages/WatchDetails";


const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/soloPage" element={<SoloPage />} />
                <Route path="/watchInfo" element={<WatchInfo />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
};

export default AppRoutes;
