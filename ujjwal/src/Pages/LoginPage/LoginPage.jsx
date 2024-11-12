import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {

    return (
        <div className="bg-[url('./images/background.jpg')] bg-cover h-screen">
            <a href="/" className='flex items-start justify-center lg:w-56 mb-0 h-12 p-4 md:justify-start md:w-56 lg:py-8 lg:mx-16 sm:w-56' >
                <div >
                    <img src="./images/logo.png" alt="Shipglobal" />
                </div>
            </a>

            <div className='flex items-center justify-center m-12'>
                <div className='rounded-lg bg-white shadow-lg p-[12px] max-w-md w-full m-10'>
                    <div className='p-6'>
                        <h1 className='text-xl font-semibold text-center'>Login</h1>
                    </div>
                    <div className='pl-6 pr-6 mb-36'>
                        <div className='space-y-1'>
                            <label className='text-sm font-normal' htmlFor="">Email<span className='ml-2 text-red-600'>*</span></label>
                            <input type="email" placeholder='Enter Email ID . . .' className='h-10 w-full px-3 py-2 text-sm border border-gray-300 rounded-md' />
                        </div>
                        <div className='space-y-1 mt-4'>
                            <label className='text-sm font-normal' htmlFor="">Password<span className='ml-2 text-red-600'>*</span></label>
                            <div className='flex'>
                                <input type="password" placeholder='Type here . . .' className='h-10 w-full px-3 py-2 text-sm border border-gray-300 rounded-md' />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5 text-current self-center -ml-10 cursor-pointer"
                                >
                                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                    <line x1="2" x2="22" y1="2" y2="22"></line>
                                </svg>
                            </div>
                        </div>
                        <div className='mt-1'>
                            <a href="" className='text-[#1f499E] text-sm hover:underline font-medium'>Forgot Password?</a>
                        </div>
                        <div className='mt-11'>
                            <div className='flex items-center justify-center border bg-[#1f499E] text-sm font-medium text-white rounded-md h-[46px]'>
                                <button >Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default LoginPage