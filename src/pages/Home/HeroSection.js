import React from 'react'
import RightVector from '../../Assets/images/Ornament 11.png'
import BottomVector from '../../Assets/images/Ornament 16.png'
import RightImg from '../../Assets/images/Rectangle 9.png'
import ShipIcon from '../../Assets/images/bxs_ship.png'
import calendarIcon from '../../Assets/images/calendar (2).png'
import BottomRightVector from '../../Assets/images/Group 1.png'
import QouteIcon from '../../Assets/images/carbon_request-quote.png'
import SearchIcon from '../../Assets/images/akar-icons_search.png'
import LoctionIcon from '../../Assets/images/carbon_location.png'
import Bg from '../../Assets/images/Vector (7).svg'

const HeroSection = () => {
    return (
        <main className='container '>
            {/* top section */}
            <section className='grid lg:grid-cols-2 gap-5 h-full '>
                <div className='flex items-center'>
                    <div>
                        <h1 className='text-primary font-bold xl:text-5xl lg:text-4xl md:text-4xl text-3xl xl:w-4/5 md:w-8/12 sm:w-96 xl:w-full lg:w-96 w-72'>
                            Reliable logistics solutions for all scales of businesses
                        </h1>
                        <p className='sm:w-96 font-medium text-sm mt-3'>
                            Bringing flexible and innovative solutions for logistical services. We have a strong infrastructure to enable us to provide services in the field of logistics solutions to the satisfaction.
                        </p>
                    </div>
                </div>

                <div>
                    <div className='flex justify-end '>

                        <div>
                            <img src={RightImg} className={'h-auto md:w-full sm:h-72 z-10 mt-10 w-10/12 ml-auto '} alt="" />
                        </div>

                        <img src={RightVector} className={' h-48 lg:h-60 absolute right-0 md:block opacity-50 2xl:hidden lg:mt-0	md:-mt-32 mt-2 -right-5 '} style={{ zIndex: -1 }} alt="" />
                    </div>


                    <div className='relative'>
                        {/* dash border */}
                        <div className='border-dashed border-2 h-48 sm:h-72 w-60 absolute -top-20 sm:-top-60 sm:left-72 lg:left-32 left-6 border-blue-100' style={{ zIndex: -1, }} />

                        <div className='h-96 w-60 z-50 p-3 absolute  rounded-xl md:left-72 -left-12 sm:left-32 -top-32 lg:-top-48 lg:-left-8 xl:left-5 flex flex-col justify-center items-center sm:scale-75 scale-50	' style={{ background: `url(${Bg})`, backgroundRepeat: 'no-repeat' }} >
                            <div className='flex items-center justify-around	 w-full'>
                                <img src={ShipIcon} className={'w-8'} alt="" />
                                {/* <p className='text-sm font-bold text-primary'>Order_qwezc10</p> */}
                                <ul className='flex'>
                                    <li className='w-1 h-1 mx-1 rounded bg-primary' />
                                    <li className='w-1 h-1 mx-1 rounded bg-primary' />
                                    <li className='w-1 h-1 mx-1 rounded bg-primary' />
                                </ul>
                            </div>

                            {/* <div className='my-2'>
                                <img src={ShipIcon} className={'w-8'} alt="" />
                            </div> */}

                            <div className='flex justify-around w-full mt-4'>
                                <div className='flex'>
                                    <div className='flex flex-col items-center'>
                                        <div className='w-7 h-7 rounded-full bg-primary' />
                                        <div className='border-l-2 border-blue-500 border-dashed h-20 '></div>
                                        <div className='bg-white h-4 w-4 rounded-full shadow-lg'></div>
                                    </div>
                                    <div className="flex flex-col justify-between">

                                        <div className='ml-1'>
                                            <p className='text-xs font-bold text-primary'>DMM</p>

                                            <div className='flex items-center'>
                                                {/* <img src={calendarIcon} alt="" className='w-3' /> */}
                                                <p className='ml-1 text-xs font-medium text-primary'>Dammam</p>
                                            </div>
                                        </div>

                                        <div className='ml-1'>
                                            <p className='text-xs font-bold text-primary'>AEDXB</p>

                                            <div className='flex items-center'>
                                                {/* <img src={calendarIcon} alt="" className='w-3' /> */}
                                                <p className='ml-1 text-xs font-medium text-primary'>Dubai</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div />
                            </div>
                        </div>


                        {/* dash border */}
                    </div>
                </div>
            </section>


            {/* bottom section */}
            <section className='grid xl:grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-5 pt-60 md:pt-60 lg:pt-20 xl:pt-40'>

                <div className='h-24 w-full relative backdrop-blur-xl rounded-xl lg:grid md:col-span-3 lg:col-span-3 xl:col-span-1' style={{ background: 'rgba(194, 212, 231, 0.5)' }}>
                    <div className='absolute bg-secondary -mt-6 rounded-t-lg ml-5'>
                        <p className='text-white font-bold px-2 capitalize'>Quick start</p>
                    </div>

                    <div className=' flex justify-evenly items-center h-full '>
                        <button className='flex font-semibold bg-white flex-col items-center py-2 px-4 text-center rounded-lg text-primary text-xs ' style={{ boxShadow: '0px 2.46066px 30.7582px rgba(7, 80, 157, 0.5)' }}>
                            <img src={QouteIcon} className={'h-3 lg:h-5'} alt="" />
                            Get a Quote
                        </button>
                        <button className='flex font-semibold bg-white flex-col items-center py-2 px-4 text-center rounded-lg text-primary text-xs ' style={{ boxShadow: '0px 2.46066px 30.7582px rgba(7, 80, 157, 0.5)' }}>
                            <img src={SearchIcon} className={'h-3 lg:h-5'} alt="" />
                            {'Track & Trace'}
                        </button>
                        <button className='flex font-semibold bg-white flex-col items-center py-2 px-4 text-center rounded-lg text-primary text-xs ' style={{ boxShadow: '0px 2.46066px 30.7582px rgba(7, 80, 157, 0.5)' }}>
                            <img src={LoctionIcon} className={'h-3 lg:h-5'} alt="" />
                            {'Our Locations'}
                        </button>
                    </div>
                </div>
                <div className='md:flex justify-center items-center lg:grid md:col-span-3 lg:col-span-2 xl:col-span-1 hidden'>
                    <img src={BottomVector} className="w-36" alt="" />
                </div>

                <div >
                    
                </div>

            </section>


        </main>
    )
}

export default HeroSection
export const BlueVectorImg = RightVector
export const CirclesVectorImg = BottomRightVector
