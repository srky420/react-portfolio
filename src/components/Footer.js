import React from "react";

// Define component
export const Footer = () => {
    return (
        <div className="w-full absolute bottom-0">
            <div className="container mx-auto px-5 lg:px-20 2xl:px-40">
                <ul className="flex justify-center gap-x-10 mb-3">
                    <li><a href="#" className="text-white text-2xl sm:text-3xl lg:text-4xl hover:text-slate-300"><i className="fa fa-github"></i></a></li>
                    <li><a href="#" className="text-white text-2xl  sm:text-3xl lg:text-4xl hover:text-slate-300"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#" className="text-white text-2xl  sm:text-3xl lg:text-4xl hover:text-slate-300"><i className="fa fa-facebook"></i></a></li>
                </ul>
                <div className="text-center">
                    <small className="text-gray-300">&copy; 2023, Shahrukh's Portfolio</small>
                </div>
            </div>
        </div>
    )
}