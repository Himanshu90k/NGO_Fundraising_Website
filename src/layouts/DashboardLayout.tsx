import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "../components/dashboard/Dashboard"; 

const DashboardLayout = () => {
    return (
        <>
            <Dashboard>
                <Outlet />
            </Dashboard>
            <ToastContainer />
        </>
    )
};

export default DashboardLayout;