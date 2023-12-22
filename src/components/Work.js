import React, { useEffect, useState } from "react";
import { work } from "../data/work-list";
import { certs } from "../data/certs-list";
import { WorkItem } from "./WorkItem";
import { CertItem } from "./CertItem";
import { Link } from "react-router-dom";

// Define component
export const Work = () => {

    // Define state
    const [toggle, setToggle] = useState(false);

    // Define effect
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Toggle projects/certifications
    const handleToggle = () => {
        setToggle(toggle => !toggle);
    }

    return (
        <div>
            <div className="bg-brown text-light py-5 show min-h-screen" id="work">
                <div className="container mx-auto px-3 h-full lg:px-20 2xl:px-40 relative">
                    <div className="flex justify-between mb-5">
                        <Link to="/" className="flex justify-between items-center px-2 lg:px-4 text-sm lg:text-lg bg-transparent w-24 lg:w-32 border border-gray-200 hover:bg-dark hover:border-dark transition-colors font-poppins" id="go-back">
                            <span className="project-btn-deco text-base lg:text-2xl transition-transform">&lt;</span>
                            <span>Go Back</span> 
                        </Link>
                        <div className="text-md lg:text-xl text-light font-poppins">
                            <button className={toggle ? "py-1 lg:py-2 mx-5 hover-effect font-thin" : "py-1 lg:py-2 mx-5 hover-active"} onClick={handleToggle} disabled={!toggle}>Projects</button>
                            <button className={toggle ? "py-1 lg:py-2 pe-0 hover-active" : "py-1 lg:py-2 hover-effect font-thin"} onClick={handleToggle} disabled={toggle}>Certifications</button>
                        </div>
                    </div>
                    {toggle ? 
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5 place-items-center py-5">
                        {certs.map((item, key) => <CertItem key={key} info={item} />)}
                    </div>
                    : 
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5 place-items-center py-5">
                        {work.map((item, key) => <WorkItem key={key} info={item} />)}
                    </div>}
                </div>
            </div>
        </div>
    );
}