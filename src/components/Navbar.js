import React, { useState } from "react";
import { Link } from "react-router-dom";

// Define component
export const Navbar = () => {

    // Define state
    const [state, setState] = useState({
        navToggle: false,
    })

    // Handle nav collapse
    const handleNavCollapse = (e) => {
        setState((state) => ({
            navToggle: !state.navToggle,
        }));
    }

    return (
        <div className="text-white bg-slate-900 sm:bg-slate-800 h-fit mb-auto">
            <div className="container mx-auto sm:px-5 lg:px-20 2xl:px-40">
                <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                    <div className="text-2xl p-3 sm:p-0 sm:text-3xl md:text-4xl font-bold">
                        Folio.
                    </div>
                    <div className={state.navToggle ? "block sm:block" : "hidden sm:block"}>
                        <ul className="flex flex-col my-4 sm:flex-row sm:my-0 text-lg lg:text-2xl">
                            <li><Link to={"/"} className="hover:text-orange-500 transition-color block px-5 py-3 sm:py-7" href="#about">About</Link></li>
                            <li><Link to={"work"} className="hover:text-orange-500 transition-color block px-5 py-3 sm:py-7" href="#work">Work</Link></li>
                            <li><a className="hover:text-orange-500 transition-color block px-5 py-3 sm:py-7" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <button className="block sm:hidden absolute right-5 top-3" onClick={handleNavCollapse}>
                        {state.navToggle ? <i className="fa fa-2x fa-close"></i> : <i className="fa fa-2x fa-bars"></i>}
                    </button>
                </div>
            </div>
        </div>
    );
}