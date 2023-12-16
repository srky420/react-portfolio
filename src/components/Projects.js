import React, { useEffect, useState } from "react";
import { Project } from "./Project";
import { projects } from "../data/projects-list";

// Define component
export const Projects = () => {

    return (
        <div className="bg-slate-700 text-white py-10 show min-h-screen">
            <div className="container my-5 mx-auto sm:px-5 h-full lg:px-20 2xl:px-40">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-10 lg:mb-16 underline underline-offset-8">These are some of my Projects</h1>
                <div className="grid grid-cols-1 min-[460px]:grid-cols-2 xl:grid-cols-3 px-3 sm:px-0 gap-4 md:gap-5">
                    {projects.map((item, key) => <Project key={key} link={item.link} src={item.src} title={item.title} />)}
                </div>
                <button className="p-2 sm:p-3 text-sm lg:text-lg bg-slate-700 rounded-md border-2 border-slate-600 hover:bg-slate-600 transition-colors mx-auto block my-16">Show More</button>
            </div>
        </div>
    );
}