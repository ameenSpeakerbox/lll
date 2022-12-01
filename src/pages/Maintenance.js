import React from 'react'
import Logo from '../Assets/images/Group 760.png'
import Image from '../Assets/images/4484466_2405453-01 1.png'
import Image2 from '../Assets/images/Group 1047.png'

const Maintenance = () => {
    return (
        <div className='flex flex-col justify-between items-center	min-h-screen py-10'>
            <img src={Logo} alt="" />
            <img src={Image} alt="" />
            <img src={Image2} alt="" className='w-screen' />

        </div>
    )
}

export default Maintenance