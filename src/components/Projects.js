import React, { useEffect, useState } from "react";
import { Project } from "./Project";
import { projects } from "../data/projects-list";
import { Link } from "react-router-dom";

// Define component
export const Projects = () => {

    return (
        <div className="bg-brown text-light pb-10 pt-20 show min-h-screen" id="work">
            <div className="container my-5 mx-auto sm:px-5 h-full lg:px-20 2xl:px-40">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-10 lg:mb-16 project-header font-raleway">These are some of my Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-5 px-3 sm:px-0 place-items-center">
                    {projects.map((item, key) => <Project key={key} link={item.link} src={item.src} title={item.title} tags={item.tags} />)}
                </div>
                <Link to="/work" className="flex justify-between items-center py-1 sm:py-2 px-4 lg:py-3 text-md lg:text-lg bg-transparent w-36 lg:w-40 border border-gray-200 hover:bg-dark hover:border-dark transition-colors mx-auto my-16 font-poppins" id="show-more">
                    <span>Show More</span> 
                    <span className="project-btn-deco text-2xl transition-transform">&gt;</span>
                </Link>
            </div>
        </div>
    );
}