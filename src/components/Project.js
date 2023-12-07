import React from "react";

// Define component
export const Project = (props) => {
    return (
        <a href={props.link} className="hover:scale-105 transition-transform shadow-lg hover:text-orange-500">
            <img src={props.src} alt={props.title} />
            <p className="text-lg text-center bg-slate-900 py-2">{props.title}</p>
        </a>
    )
}