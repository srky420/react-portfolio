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
                <ul className="grid grid-cols-2 min-[480px]:grid-cols-4 gap-5 text-sm md:text-md lg:text-xl font-poppins my-5">
                    <li className="hover:text-orange transition-all contact-link"><a href="" className="block"><i className="fa fa-envelope"></i> Email</a></li>
                    <li className="hover:text-orange transition-all contact-link"><a href="" className="block"><i className="fa fa-linkedin"></i> LinkedIn</a></li>
                    <li className="hover:text-orange transition-all contact-link"><a href="" className="block"><i className="fa fa-github"></i> Github</a></li>
                    <li className="hover:text-orange transition-all contact-link"><a href="" className="block"><i className="fa fa-facebook"></i> Facebook</a></li>
                </ul>
            </div>
        </div>
    )
}