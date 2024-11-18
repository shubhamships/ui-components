import React from 'react'
import errorImage from '../assets/errorimage.png'
import { useRouteError } from "react-router-dom";

function CustomError() {
    const error = useRouteError();
    return (
        <div className='flex flex-col justify-center items-center '>
            <img className='h-52' src={errorImage} alt=""/>
            <h1 className='text-7xl font-bold text-blue-900 mt-8'>{error.status}</h1>
            <h1 className='text-2xl font-extrabold text-blue-900'>{error.statusText = "Page Not Found"}</h1>
            <div className='flex flex-col justify-center text-center text-xs px-6 mt-8'>
                <p><b className='font-medium'>Pro Tip :</b> Just like every shipment needs the right address, make sure the URL you entered is correct!</p>
                <p>If you continue to have trouble, please reach out to our support team, and we'll help you find your way.</p>
            </div>
        </div>
    )
}
export default CustomError