import React from "react";

// Define component
export const ProjectItem = (props) => {
    return (
        <a href={props.info.link} className="transition-transform drop-shadow-sm hover:text-orange border border-gray-900 project w-full min-[400px]:w-96 sm:w-full relative" target="_blank" rel="noreferrer">
            <img src={props.info.src} alt={props.info.title} className="object-cover w-full h-60" />
            <p className="text-base lg:text-md xl:text-xl text-center bg-dark py-3 font-poppins">
                <span className="deco">&lt;</span> {props.info.title} <span className="deco"> /&gt;</span>
            </p>
            <span className="absolute top-0 left-0 project-tags text-light font-poppins text-base lg:text-md xl:text-xl z-50 bg-dark bg-opacity-75 p-2 opacity-100 md:opacity-0 transition-opacity">{props.info.tags}</span>
        </a>
    );
}