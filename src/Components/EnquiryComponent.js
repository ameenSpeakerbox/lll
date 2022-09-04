import React from 'react'
import QouteIcon from '../Assets/images/carbon_request-quote.png'
import SearchIcon from '../Assets/images/akar-icons_search.png'
import LoctionIcon from '../Assets/images/carbon_location.png'

const EnquiryComponent = () => {
    return (
        <div className='rounded-3xl p-10 mt-10 grid grid-cols-2' style={{ background: '#D6E3EF', maxWidth: '695px', width: '100%' }}>
            <div>
                <h2 className='text-4xl text-primary font-bold'>Do you have a requriement?</h2>
            </div>
            <div className='grid grid-cols-2 gap-5'>

                <button className='flex font-semibold bg-white flex-col justify-center items-center py-2 px-4 text-center rounded-lg text-primary text-xs ' style={{ boxShadow: '0px 2.46066px 30.7582px rgba(7, 80, 157, 0.5)' }}>
                    <img src={QouteIcon} className={'h-8'} alt="" />
                    Get a Quote
                </button>
                <button className='flex font-semibold bg-white flex-col  justify-center items-center py-2 px-4 text-center rounded-lg text-primary text-xs ' style={{ boxShadow: '0px 2.46066px 30.7582px rgba(7, 80, 157, 0.5)' }}>
                    <img src={SearchIcon} className={'h-8'} alt="" />
                    {'Contact Sales'}
                </button>


            </div>
        </div >
    )
}

export default EnquiryComponent