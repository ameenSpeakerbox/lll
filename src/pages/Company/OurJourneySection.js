import React from 'react'
import yearTextLogo from '../../Assets/images/Group 759.svg'
import Image from '../../Assets/images/Rectangle 31.png'
import PolygonImage from '../../Assets/images/Polygon 1.svg'
import YoutubeIcon from '../../Assets/images/youtube-icon.svg'
import MilestoneImg from '../../Assets/images/efs-milestone 2.png'

const OurJourneySection = () => {

    return (
        <section className=' py-20  '>
            <div className="container h-auto xl:px-10 ">
                <div className="grid lg:grid-cols-2">
                    <div className='flex items-start lg:pr-10'>
                        <img src={yearTextLogo} className={'md:w-40 w-28'} alt="" />
                        <div className='ml-4 w-3/4'>
                            <h1 className='text-3xl md:text-5xl text-primary font-bold'>Our Journey</h1>
                            <h1 className='text-5xl md:text-7xl text-primary font-bold'>So Far</h1>

                            <p className=' sm:block hidden '>
                                Crossing 25 years of operations, EFS has achieved a remarkable growth in the Kingdom and established as world-class provider of innovative logistics and supply-chain services and solutions.
                            </p>
                        </div>
                    </div>
                    <p className='block sm:hidden my-5'>
                        Crossing 25 years of operations, EFS has achieved a remarkable growth in the Kingdom and established as world-class provider of innovative logistics and supply-chain services and solutions.
                    </p>
                    <div>
                        <div className='relative flex justify-end mt-5 md:mt-0'>
                            <img src={Image} className={'w-full'} alt="" />
                            <div className='absolute w-full h-full flex justify-center items-center'>
                                <div className="relative flex justify-center items-center cursor-pointer">

                                    <img src={PolygonImage} className={'absolute z-10 ml-3'} alt="" />
                                    <div className='p-5 rounded-full w-28 h-28' style={{
                                        background: 'rgba(149, 209, 251, 0.83)',
                                        backdropFilter: 'blur(3.5px)'
                                    }}></div>
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-center mt-2'>
                            <img src={YoutubeIcon} alt="" />
                            <p className='text-primary underline font-bold  w-52 ml-3'>Watch EFS Annual Meet 2022 Highlights</p>
                        </div>
                    </div>
                </div>


                {/* our milestone section start */}
                <div className='mt-16'>
                    {/* <h1 className='font-semibold tracking-widest	 text-center text-primary'>OUR MILESTONES</h1> */}

                    {/* <div style={{
                        background: 'linear-gradient(94.71deg, #F2F8FF -0.56%, rgba(242, 248, 255, 0) 100%)',
                        boxShadow: 'inset 0px 0px 21.875px rgba(11, 81, 158, 0.08)'
                    }} className='grid grid-cols-3 gap-5 h-20 rounded-xl'> */}
                    {/* </div> */}
                    <img src={MilestoneImg} alt="" />
                </div>
                {/* our milestone section end */}
            </div>
        </section>
    )
}

export default OurJourneySection