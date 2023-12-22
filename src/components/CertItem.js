import React from "react";

// Define component
export const CertItem = (props) => {
    return (
        <a href={props.info.link} className="shadow-sm border border-gray-900 max-w-sm sm:max-w-full relative flex flex-col justify-between h-full" target="_blank">
            <div className="h-full">
                <img src={props.info.src} alt={props.info.title} className="h-full object-cover" />
            </div>
            <div className="text-center">
                <div className="text-base lg:text-md xl:text-xl bg-dark p-3 font-poppins">{props.info.title}</div>
                <div className="text-grey font-poppins bg-dark px-3 pb-2 text-sm text-justify">{props.info.desc}</div>
            </div>
        </a>
    )
}