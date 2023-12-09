import React from "react";

// Define component
export const Project = (props) => {
    return (
        <a href={props.link} className="hover:scale-105 transition-transform drop-shadow-sm hover:text-orange-500 rounded-md">
            <img src={props.src} alt={props.title} className="object-cover w-full h-60 rounded-t-md" />
            <p className="text-base md:text-lg text-center font-semibold bg-slate-900 py-2 rounded-b-md">{props.title}</p>
        </a>
    );
}