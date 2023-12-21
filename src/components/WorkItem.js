import React from "react";

// Define component
export const WorkItem = (props) => {
    return (
        <div className="shadow-sm border border-gray-900 sm:w-full relative flex flex-col justify-between">
            <div className="h-full">
                <img src={props.info.src} alt={props.info.title} className="h-full object-cover" />
            </div>
            <div>
                <div className="text-base lg:text-md xl:text-xl bg-dark p-3 font-poppins">{props.info.title}</div>
                <div className="text-grey font-poppins bg-dark px-3 pb-2 text-sm text-justify">{props.info.desc}</div>
                <div className="grid grid-cols-2">
                    <button className="py-3 bg-grey text-black hover:bg-orange hover:text-light border-r border-dark text-sm lg:text-base font-poppins">
                        {props.info.availability === 'youtube' ? <i className="fa fa-youtube-play"></i> : <>Try It</>}
                    </button>
                    <button className="py-3 bg-grey text-black hover:bg-orange hover:text-light text-base lg:text-xl"><i className="fa fa-github"></i></button>
                </div>
            </div>
        </div>
    )
}