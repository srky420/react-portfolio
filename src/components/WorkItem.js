import React from "react";

// Define component
export const WorkItem = (props) => {
    return (
        <div className="shadow-sm border border-gray-900 max-w-sm sm:max-w-full relative flex flex-col justify-between h-full">
            <div className="h-full">
                <img src={props.info.src} alt={props.info.title} className="h-full object-cover" />
            </div>
            <div>
                <div className="text-base lg:text-md xl:text-xl bg-dark p-3 font-poppins">{props.info.title}</div>
                <div className="text-grey font-poppins bg-dark px-3 pb-2 text-sm text-justify">{props.info.desc}</div>
                <div className="grid grid-cols-2 text-center">
                    {props.info.availability === 'youtube' ?
                    <a href={props.info.ytLink} className="py-3 bg-grey text-black hover:bg-orange hover:text-light border-r border-dark text-base lg:text-xl font-poppins" target="_blank">
                        <i className="fa fa-youtube-play"></i>
                    </a>:
                    <a href={props.info.link} className="py-3 bg-grey text-black hover:bg-orange hover:text-light border-r border-dark text-sm lg:text-base font-poppins" target="_blank">
                        Try It
                    </a>}
                    <a href={props.info.gitLink} className="py-3 bg-grey text-black hover:bg-orange hover:text-light text-base lg:text-xl" target="_blank"><i className="fa fa-github"></i></a>
                </div>
            </div>
        </div>
    )
}