import React, { useEffect, useRef, useState } from "react";

// Define component
export const About = () => {

    // Define state
    const [state, setState] = useState({
        textToggle: false,
    });

    const toggleText = (e) => {
        if (e.animationName === 'writer') {
            setState((state) => ({
                textToggle: !state.textToggle
            }));
        }
    }

    return (
        <div className="text-light show min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-dark to-gray-950" id="about">
            <div className="container mx-auto sm:px-5 lg:px-20 2xl:px-40 flex items-center justify-center md:justify-between h-full">
                <div className="flex flex-col items-center text-center md:items-start gap-y-5 xl:gap-y-10">
                    <h1 className="text-4xl min-[540px]:text-5xl lg:text-6xl xl:text-7xl font-bold lg:text-start font-raleway">Hey I am Shahrukh</h1>
                    <div className="mx-auto md:mx-0">
                        <p className="text-md min-[540px]:text-xl lg:text-2xl mx-auto md:mx-0 typewriter whitespace-nowrap w-0 font-mono text-orange border-r-2 border-orange overflow-hidden" onAnimationIteration={toggleText}>
                            {state.textToggle ? <>a software engineer</> : <>a web developer</>}
                        </p>
                    </div>
                    <div className="flex gap-4 my-3 mx-auto md:mx-0">
                        <a href="#work" className="py-2 px-4 md:py-3 text-sm lg:text-lg bg-transparent border border-gray-200 hover:bg-brown hover:border-brown transition-colors font-poppins">See Projects</a>
                        <a href="#contact" className="py-2 px-4 md:py-3 text-sm lg:text-lg bg-transparent border border-gray-200 hover:bg-brown hover:border-brown transition-colors font-poppins">Contact Me</a>
                    </div>
                </div>
                <img className="rounded-full ring-2 ring-slate-600 hidden md:block object-cover p-2 md:h-60 md:w-60 lg:h-72 lg:w-72 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96" 
                    src="../img/profile.png" alt="profile" />
            </div>
        </div>
    )
}