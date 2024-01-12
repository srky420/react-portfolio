import React from "react";

// Define component
export const Footer = () => {
    return (
        <div className="absolute w-full bottom-0">
            <div className="w-44 lg:w-60 border-2 border-gray-300 rounded-md mx-auto"></div>
            <div className="container mx-auto px-5 lg:px-20 2xl:px-40">
                <div className="text-center my-3 lg:my-4">
                    <p className="text-xs lg:text-sm text-gray-300">&copy; 2024, Shahrukh's Portfolio</p>
                </div>
            </div>
        </div>
    );
}