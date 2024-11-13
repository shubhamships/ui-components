import React from 'react'

function ForgotPassword({ onBackToLogin }) {


    return (
        <div className=''>

            <div className='flex items-center justify-center'>
                <div className='rounded-lg max-w-md w-full'>
                    <div className='p-6'>
                        <h1 className='text-xl font-semibold text-center'>Forgot Your Password?</h1>
                    </div>
                    <div className='pl-6 pr-6 mb-36'>
                        <p className='text-sm text-center'>Enter email address associated with your account and you will receive an email to reset your password.</p>
                        <div className='space-y-1 mt-5'>
                            <label className='text-sm font-normal' htmlFor="">Email<span className='ml-2 text-red-600'>*</span></label>
                            <input type="email" placeholder='Enter Email ID . . .' className='h-10 w-full px-3 py-2 text-sm border border-gray-300 rounded-md' />
                        </div>
                        <div className='mt-11'>
                            <div className='flex items-center justify-center border bg-[#1f499E] text-sm font-medium text-white rounded-md h-[46px]'>
                                <button >Submit</button>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <button className='text-blue-900 font-medium hover:underline flex item-center justify-center ml-32 ' onClick={onBackToLogin} >Return to Login</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ForgotPassword