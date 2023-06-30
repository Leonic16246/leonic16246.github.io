import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="app">
            <Navbar />
            <div className="page">
                <span className="tags-top-tags">&lt;body&gt;</span>
                <Outlet />
                <span className="tags-bottom-tags">
                    &lt;body&gt;
                    <br />
                    <span className="bottom-tag-html"></span>
                </span>
            </div>
        </div>
    )

       
        
}