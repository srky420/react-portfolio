import React from "react";

// Define component
export const Project = (props) => {
    return (
        <a href={props.link} className="hover:scale-105 transition-transform drop-shadow-sm hover:text-orange border border-gray-900">
            <img src={props.src} alt={props.title} className="object-cover w-full h-60" />
            <p className="text-base md:text-lg lg:text-xl text-center bg-dark py-3">{props.title}</p>
        </a>
    );
}