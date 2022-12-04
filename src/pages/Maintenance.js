import React from 'react'
import Logo from '../Assets/images/Group 760.png'
import Image from '../Assets/images/4484466_2405453-01 1.png'
import Image2 from '../Assets/images/Group 1047.png'
import { Link } from 'gatsby'

const Maintenance = () => {
    return (
        <div className='flex flex-col justify-between items-center	min-h-screen py-10'>
            <img src={Logo} alt="" className='h-16' />
            <img src={Image} alt="" className='h-60' />
            <div className='text-center'>
                <h2 className='text-primary  text-xl md:text-2xl lg:text-3xl font-bold'>This feature is temporarily unavailable.</h2>
                <Link to='/' className='text-primary text-center text-xs font-light'>Go to Home</Link>
            </div>

            <img src={Image2} alt="" className='w-screen' />

        </div>
    )
}

export default Maintenance