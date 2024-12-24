import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "../components/Dashboard/Dashboard";

const DashboardLayout = () => {
    return (
        <>
            <Dashboard />
            <Outlet />
            <ToastContainer />
        </>
    )
};

export default DashboardLayout;