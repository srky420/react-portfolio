import React, { useState } from "react";
import { work } from "../data/work-list";
import { WorkItem } from "./WorkItem";
import { Link } from "react-router-dom";

// Define component
export const Work = () => {

    // Define state
    const [toggle, setToggle] = useState(false);

    // Toggle projects/certifications
    const handleToggle = () => {
        setToggle(toggle => !toggle);
    }

    return (
        <div>
            <div className="bg-brown text-light py-5 show min-h-screen" id="work">
                <div className="container mx-auto px-3 h-full lg:px-20 2xl:px-40 relative">
                    <div className="flex justify-between mb-5">
                        <Link to="/" className="flex justify-between items-center py-1 sm:py-1 px-6 md:py-2 lg:py-3 text-md lg:text-lg bg-transparent w-36 lg:w-40 border border-gray-200 hover:bg-dark hover:border-dark transition-colors font-poppins" id="go-back">
                            <span className="project-btn-deco text-2xl transition-transform">&lt;</span>
                            <span>Go Back</span> 
                        </Link>
                        <div className="text-lg lg:text-xl">
                            <button className={toggle ? "text-light p-3 font-raleway hover-effect inline-block" : "text-light p-3 font-raleway hover-active"} onClick={handleToggle}>Projects</button>
                            <button className={toggle ? "text-light p-3 font-raleway hover-active" : "text-light p-3 font-raleway hover-effect"} onClick={handleToggle}>Certification</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 xl:gap-5">
                        {work.map((item, key) => <WorkItem key={key} info={item} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}