import React from "react";

// Define component
export const CertItem = (props) => {
    return (
        <a href={props.info.link} className="shadow-sm border border-gray-900 max-w-sm sm:max-w-full flex flex-col justify-between h-full cert" target="_blank" rel="noreferrer">
            <div className="h-full relative">
                <img src={props.info.src} alt={props.info.title} className="h-full object-cover" />
                <div className="absolute top-0 w-full h-full bg-dark opacity-0 hover-overlay text-center flex justify-center items-center transition-all">
                    <i className="fa fa-2x fa-external-link"></i>
                </div>
            </div>
            <div className="text-center">
                <div className="text-base lg:text-md xl:text-xl bg-dark p-3 font-poppins">{props.info.title}</div>
                <div className="text-grey font-poppins bg-dark px-3 pb-2 text-sm">{props.info.desc}</div>
            </div>
        </a>
    )
}