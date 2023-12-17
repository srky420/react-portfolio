import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Define component
export const Navbar = () => {

    // Define reference
    const navbar = useRef(null);

    // Define state
    const [state, setState] = useState({
        navToggle: false,
        navScroll: false
    })

    // Use Effect hook
    useEffect(() => {
        window.addEventListener('scroll', handleNavScroll);

        return () => {
            window.removeEventListener('scroll', handleNavScroll);
        }
    })

    // Handle nav collapse
    const handleNavCollapse = (e) => {
        console.log(e.target.href)
        setState((state) => ({
            navToggle: e.target.href ? false : !state.navToggle,
        }));
    }

    // Handle nav scroll toggle
    const handleNavScroll = (e) => {
        const navHeight = navbar.current.getBoundingClientRect().height;
        if (window.scrollY > navHeight) {
            setState((state) => ({
                ...state,
                navScroll: true
            }));
        }
        else {
            setState((state) => ({
                ...state,
                navScroll: false
            }));
        }
    }

    // Set class names
    const classNames = state.navScroll ? "text-white bg-dark fixed w-full border-b-2 border-black z-10" : "text-white bg-dark sm:bg-transparent fixed sm:absolute w-full border-b-2 border-black sm:border-0 z-10";

    return (
        <div className={classNames} ref={navbar}>
            <div className="container mx-auto sm:px-5 lg:px-20 2xl:px-40">
                <div className="flex flex-col justify-between sm:flex-row sm:items-center font-poppins">
                    <div className="text-2xl p-3 sm:p-0 sm:text-3xl lg:text-4xl font-bold first-letter:text-orange">
                        Folio.
                    </div>
                    <div className={state.navToggle ? "h-48 sm:h-fit overflow-y-hidden sm:overflow-y-auto transition-all" : "h-0 overflow-y-hidden sm:h-fit transition-all"}>
                        <ul className="flex flex-col my-4 sm:flex-row sm:my-0 text-lg lg:text-2xl">
                            <li><Link to={"/"} className="hover:text-orange transition-color block px-5 py-3 sm:py-7" onClick={handleNavCollapse}>About</Link></li>
                            <li><Link to={"work"} className="hover:text-orange transition-color block px-5 py-3 sm:py-7" onClick={handleNavCollapse}>Work</Link></li>
                            <li><Link to={"contact"} className="hover:text-orange transition-color block px-5 sm:px-0 sm:ps-3 py-3 sm:py-7" onClick={handleNavCollapse}>Contact</Link></li>
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