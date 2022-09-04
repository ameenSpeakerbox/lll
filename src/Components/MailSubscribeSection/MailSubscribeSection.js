import React from 'react'
import '../../styles/Index.css'

const MailSubscribeSection = () => {
    
    return (
        <div className='py-10'>
            <div className=' border-b border-white' />

            <div className='grid grid-cols-2 gap-5 py-14'>
                <div className='text-white'>
                    <h4 className='font-medium text-3xl'>Let’s Stay Connected!</h4>
                    <p className='font-light text-2xl w-11/12'>
                        Sign up for our monthly newsletter and get regular updates.
                    </p>
                </div>


                <div className='flex flex-col items-end'>
                    <input type="text" className='rounded-full w-10/12 h-10 p-5' placeholder='Enter your email here' />
                    <button className='subscribe___btn py-2 px-10 rounded-2xl transition-all duration-500 ease-in hover:shadow-xl text-white mt-5'>Subscribe</button>
                </div>
            </div>

            <div className=' border-b border-white' />
            
        </div>
    )
}

export default MailSubscribeSection