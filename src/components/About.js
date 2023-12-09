import React, { useEffect, useRef, useState } from "react";

// Define component
export const About = () => {

    // Define state
    const [state, setState] = useState({
        textToggle: false,
        opacityToggle: false
    });

    // Use effect
    useEffect(() => {
        setState((state) => ({
            ...state,
            opacityToggle: true
        }));
    }, []);

    const toggleText = (e) => {
        if (e.animationName === 'writer') {
            setState((state) => ({
                ...state,
                textToggle: !state.textToggle
            }));
        }
    }

    return (
        <div className={state.opacityToggle ? "w-full text-white my-auto show" : "opacity-0"}>
            <div className="container mx-auto sm:px-5 lg:px-20 2xl:px-40 flex items-center justify-center md:justify-between h-full">
                <div className="flex flex-col items-center text-center md:items-start gap-y-5 lg:gap-y-10">
                    <h1 className="text-3xl min-[420px]:text-4xl min-[540px]:text-5xl lg:text-6xl xl:text-7xl font-bold lg:text-start">Hey I am Shahrukh</h1>
                    <div className="mx-auto md:mx-0">
                        <p className="text-lg min-[540px]:text-2xl lg:text-3xl tracking-widest mx-auto md:mx-0 typewriter whitespace-nowrap w-0 font-mono text-orange-500 border-r overflow-hidden" onAnimationIteration={toggleText}>
                            {state.textToggle ? <>a software engineer</> : <>a web developer</>}
                        </p>
                    </div>
                    <div className="flex gap-4 my-3 mx-auto md:mx-0">
                        <button className="p-2 sm:p-3 text-sm lg:text-lg bg-slate-800 rounded-md border-2 border-slate-600 hover:bg-slate-600 transition-colors">See Projects</button>
                        <button className="p-2 sm:p-3 text-sm lg:text-lg bg-slate-800 rounded-md border-2 border-slate-600 hover:bg-slate-600 transition-colors">Contact Me</button>
                    </div>
                </div>
                <img className="rounded-full ring-2 ring-slate-600 hidden md:block object-cover p-2 md:h-60 md:w-60 lg:h-72 lg:w-72 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96" 
                    src="../img/profile.png" alt="profile" />
            </div>
        </div>
    )
}