import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {

    return (
        <div className="bg-[url('./images/background.jpg')] bg-cover bg-center h-screen">

            <div className='flex items-start justify-center mb-0 lg:mx-11 p-8 w-64  md:flex md:justify-start md:items-center'>
                <Link to={"/"}>
                    <img src="./images/logo.png" alt="Shipglobal" />
                </Link>
            </div>

            <div className='flex items-center justify-center m-4'>
                <div className='rounded-lg bg-white shadow-lg p-[12px] max-w-md w-full m-10'>
                    <div className='p-6'>
                        <h1 className='text-xl font-semibold text-center'>Login</h1>
                    </div>
                    <div className='p-6 pb-36'>``
                        <div className='space-y-1'>
                            <label className='text-sm font-normal' htmlFor="">Email<span className='ml-1 text-red-600'>*</span></label>
                            <input type="email" placeholder='Enter Email ID...' className='h-10 w-full p-4 text-sm border border-gray-300 rounded-md' />
                        </div>
                        <div className='space-y-1 mt-4'>
                            <label className='text-sm font-normal' htmlFor="">Password<span className='ml-1 text-red-600'>*</span></label>
                            <div className='flex'>

                                <input type="password" placeholder='Enter Email ID...' className='h-10 w-full p-4 text-sm border border-gray-300 rounded-md' />
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
                            <a href="" className='text-[#1f499E] text-sm hover:underline font-semibold'>Forgot Password?</a>
                        </div>
                        <div className='mt-10'>
                            <div className='flex items-center justify-center border bg-[#1f499E] text-sm font-semibold text-white rounded-md h-11'>
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