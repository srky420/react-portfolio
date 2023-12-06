import React from "react";

// Define component
export const Projects = () => {
    return (
        <div className="my-10 bg-slate-800 text-white">
            <div className="container flex flex-wrap justify-center mx-auto sm:px-5 h-full lg:px-20 2xl:px-40">
                <a href="#" className="w-1/3 p-5 hover:scale-105 transition-transform">
                    <img src={require("../img/news-project.JPG")} />
                    <p className="text-lg text-center bg-slate-600 py-2">News App</p>
                </a>
                <a href="#" className="w-1/3 p-5 hover:scale-105 transition-transform">
                    <img src={require("../img/news-project.JPG")} />
                    <p className="text-lg text-center bg-slate-600 py-2">News App</p>
                </a>
                <a href="#" className="w-1/3 p-5 hover:scale-105 transition-transform">
                    <img src={require("../img/news-project.JPG")} />
                    <p className="text-lg text-center bg-slate-600 py-2">News App</p>
                </a>
                <a href="#" className="w-1/3 p-5 hover:scale-105 transition-transform">
                    <img src={require("../img/news-project.JPG")} />
                    <p className="text-lg text-center bg-slate-600 py-2">News App</p>
                </a>
                <a href="#" className="w-1/3 p-5 hover:scale-105 transition-transform">
                    <img src={require("../img/news-project.JPG")} />
                    <p className="text-lg text-center bg-slate-600 py-2">News App</p>
                </a>
                <a href="#" className="w-1/3 p-5 hover:scale-105 transition-transform">
                    <img src={require("../img/news-project.JPG")} />
                    <p className="text-lg text-center bg-slate-600 py-2">News App</p>
                </a>
            </div>
        </div>
    );
}