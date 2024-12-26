import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
             
             <Navbar></Navbar>

            <div className="min-h-screen mt-16">
            <Outlet></Outlet>
            </div>
           
            <Footer></Footer>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;