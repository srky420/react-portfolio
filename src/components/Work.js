import React from "react";
import { work } from "../data/work-list";
import { Project } from "./Project";
import { Link } from "react-router-dom";

// Define component
export const Work = () => {
    return (
        <div>
            <div className="bg-brown text-light py-10 show min-h-screen" id="work">
                <div className="container mx-auto sm:px-5 h-full lg:px-20 2xl:px-40 relative">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-10 lg:mb-16 project-header font-raleway">All of my projects and certifications</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-5 px-3 sm:px-0 place-items-center">
                        {work.map((item, key) => <Project key={key} link={item.link} src={item.src} title={item.title} tags={item.tags} />)}
                    </div>
                    <Link to="/" className="flex justify-between items-center py-1 sm:py-2 px-6 lg:py-3 text-md lg:text-lg bg-transparent w-36 lg:w-40 border border-gray-200 hover:bg-dark hover:border-dark transition-colors font-poppins absolute top-0 left-40" id="go-back">
                        <span className="project-btn-deco text-2xl transition-transform">&lt;</span>
                        <span>Go Back</span> 
                    </Link>
                </div>
            </div>
        </div>
    );
}