import React, { useEffect, useState } from "react";
import { Project } from "./Project";
import { projects } from "../data/projects-list";

// Define component
export const Projects = () => {

    return (
        <div className="bg-brown text-light pb-10 pt-20 show min-h-screen" id="work">
            <div className="container my-5 mx-auto sm:px-5 h-full lg:px-20 2xl:px-40">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-10 lg:mb-16 underline underline-offset-8">These are some of my Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-5 px-3 sm:px-0 place-items-center">
                    {projects.map((item, key) => <Project key={key} link={item.link} src={item.src} title={item.title} />)}
                </div>
                <button className="py-2 px-4 sm:py-3 text-md lg:text-lg bg-transparent border border-gray-200 hover:bg-dark hover:border-dark transition-colors mx-auto block my-16 font-poppins">Show More</button>
            </div>
        </div>
    );
}