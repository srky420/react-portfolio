import React, { useEffect, useState } from "react";
import { Project } from "./Project";
import { projects } from "../data/projects-list";

// Define component
export const Projects = () => {

    // Define state
    const [state, setState] = useState({
        opacityToggle: false
    })

    // Use effect
    useEffect(() => {
        setState({
            opacityToggle: true
        })
    }, [])

    return (
        <div className={state.opacityToggle ? "bg-slate-800 text-white show" : "opacity-0"}>
            <div className="container mx-auto sm:px-5 h-full lg:px-20 2xl:px-40">
                <h1 className="text-center text-4xl font-bold mb-10">My Projects</h1>
                <div className="grid grid-cols-2 px-2 lg:grid-cols-3 gap-3 md:gap-5">
                    {projects.map((item, key) => <Project key={key} link={item.link} src={item.src} title={item.title} />)}
                </div>
            </div>
        </div>
    );
}