import React from "react";

// Define component
export const Project = (props) => {
    return (
        <a href={props.link} className="transition-transform drop-shadow-sm hover:text-orange border border-gray-900 project w-80 sm:w-96">
            <img src={props.src} alt={props.title} className="object-cover w-full h-60" />
            <p className="text-base md:text-lg lg:text-xl text-center bg-dark py-3 font-poppins">
                <span className="deco">&lt;</span> {props.title} <span className="deco"> /&gt;</span>
            </p>
        </a>
    );
}