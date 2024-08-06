import "./Layout.scss";
import Navbar from "../Navbar/Navbar";

import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="app">
            <Navbar />
            <div className="page">
                <span className="tags-top-tags"></span>
                <Outlet />
                <span className="tags-bottom-tags">
                    
                    <br />
                    <span className="bottom-tag-html"></span>
                </span>
            </div>
        </div>
    )

}