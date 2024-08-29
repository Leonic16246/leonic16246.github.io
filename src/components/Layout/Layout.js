import "./Layout.css";
import Navbar from "../Navbar/Navbar";

import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="app">
            <Navbar />
            <div className="page">
                <Outlet />
            </div>
        </div>
    )

}