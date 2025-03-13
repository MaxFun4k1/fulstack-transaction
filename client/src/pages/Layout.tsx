import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout: FC = () => {
    return (
        <div className="min-h-screen bg-slate-900 font-roboto text-white pb-20">
            <div>
                <Header />
            </div>
            <div className="container mx-auto w-1/2">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
