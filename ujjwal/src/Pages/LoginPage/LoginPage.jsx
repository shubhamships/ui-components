import React, { useState } from 'react'
import ForgotPassword from './ForgotPassword';
import zod from 'zod'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LuLoader } from "react-icons/lu";
import LogoImg from "../../assets/logo.png"

function LoginPage() {
    const schema = zod.object({
        email: zod.string().email("Must be a valid email address"),
        password: zod.string().min(6, "Password must be 6 or more characters long").max(20)
    })
    const navigate = useNavigate();
    const [forgotPassword, setForgotPassword] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState({})
    const [apiError, setApiError] = useState(false)
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleForgotPassword = (e) => {
        e.preventDefault();
        setForgotPassword(true);
    }
    const handleBackToLogin = () => {
        setForgotPassword(false);
    };
    const handleshowPassword = () => {
        if (showPassword) {
            setShowPassword(false)
        } else {
            setShowPassword(true)
        }
    }
    const handleChange = (e) => {
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const res = schema.safeParse({
            ...data
        })
        if (!res.success) {
            const formatErrors = res.error.format();
            setError(formatErrors)
            handleAPI();
        }
        else {
            setError({});
            handleAPI();
        }
    }
    const handleAPI = async () => {
        setLoader(true);
        try {
            const res = await axios.post("https://api.fr.stg.shipglobal.in/public/api/v1/auth/login",
                {
                    email: data.email,
                    password: data.password
                },
                {
                    headers: {
                        "content-type": "application/json",
                        accept: "application/json"
                    }
                }
            )
            const APIData = await res.data
            console.log(APIData);
            const token = APIData.data.token_details.token;
            if (token) {
                localStorage.setItem("JWTToken", token);
                navigate('/home')
            }
        } catch (error) {
            setApiError(true)
        }
        setTimeout(() => {
            setLoader(false);
        }, 2000);
    }
    return (
        <div className="bg-[url('./images/background.jpg')] bg-cover h-screen">
            <a href="/" className='flex items-start justify-center lg:w-56 mb-0 h-12 py-4 -px-2 md:justify-center md:w-56 lg:py-8 lg:mx-16 sm:w-56' >
                <div className=''>
                    <img src={LogoImg} alt="Shipglobal" className='h-12' />
                </div>
            </a>
            <div className='flex items-center justify-center mt-[53px] lg:mt-[88px] px-4'>
                <div className='rounded-lg bg-white shadow-lg p-[12px] max-w-md w-full'>
                    {forgotPassword ? (<ForgotPassword handleSubmit={handleSubmit} error={error} onBackToLogin={handleBackToLogin} />) : (
                        <>
                            <div className='p-6'>
                                <h1 className='text-xl font-semibold text-center'>Login</h1>
                            </div>
                            <form onSubmit={handleSubmit} className='pl-6 pr-6 pb-[143px]'>
                                <div className='space-y-1'>
                                    <label className='text-sm font-normal' htmlFor="">Email<span className='ml-2 text-red-600'>*</span></label>
                                    <input name='email' type="email" placeholder='Enter Email ID . . .' className='h-10 w-full px-3 py-2 text-sm border border-gray-300 rounded-md' onChange={handleChange} />
                                    {error.email && (<p className='text-xs font-medium text-red-600'>{error.email._errors[0]}</p>)}
                                </div>
                                <div className='space-y-1 mt-4'>
                                    <label className='text-sm font-normal' htmlFor="">Password<span className='ml-2 text-red-600'>*</span></label>
                                    <div className='flex'>
                                        <input name='password' type={showPassword ? "text" : "password"} placeholder='Type here . . .' className='h-10 w-full px-3 outline- py-2 text-sm border border-gray-300 rounded-md' onChange={handleChange} />
                                        <div onClick={handleshowPassword} className='mt-2.5'>
                                            {!showPassword ? (<svg
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
                                            </svg>) : (<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-eye self-center w-5 h-5 -ml-10 cursor-pointer"
                                            >
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>)}
                                        </div>
                                    </div>
                                    {error.password && (<p className='text-xs font-medium text-red-600'>{error.password._errors[0]}</p>)}
                                </div>
                                <div className='mt-1'>
                                    <a href="#"
                                        onClick={handleForgotPassword}
                                        className='text-blue-900 text-sm hover:underline font-medium'>Forgot Password?</a>
                                </div>
                                <div>
                                    {apiError && <p className='text-xs font-medium text-red-600'>{"Wrong email or password. Try again"}</p>}
                                </div>
                                <div className='mt-11'>
                                    <div className='flex items-center justify-center border bg-blue-900 text-sm font-medium text-white rounded-md h-[46px]'>
                                        <button onClick={handleAPI} className="w-full flex items-center justify-center" type='submit' >Submit {setLoader ? <LuLoader className={`${loader ? "block" : "hidden"} animate-spin ml-2`} /> : ""}</button>
                                    </div>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
export default LoginPage;