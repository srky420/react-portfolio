import React from "react";

// Define component
export const Contact = () => {
    return (
        <div className="contact w-full bg-dark" id="contact">
            <div className="text-light font-raleway flex flex-col gap-5 justify-center items-center h-full text-center">
                <div>
                    <h1 className="text-4xl min-[480px]:text-5xl lg:text-6xl">Let's work together</h1>
                    <p className="text-orange italic font-poppins text-sm min-[480px]:text-base md:text-md lg:text-lg font-thin mt-2">How do you wanna contact me?</p>
                </div>
            </div>
        </div>
    )
}