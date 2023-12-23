import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return(
        <div id="error-page" className="bg-dark h-screen w-full flex flex-col gap-5 justify-center items-center text-white">
            <h1 className="text-3xl lg:text-4xl font-bold">Oops!</h1>
            <p className="text-lg lg:text-xl">Sorry, unexpected error occured.</p>
            <p className="italic text-gray-300">{ error.statusText || error.message }</p>
        </div>
    );
}