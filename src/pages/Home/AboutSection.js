import React from 'react'
import Vector1 from '../../Assets/images/Ellipse 9.png'
import FImg from '../../Assets/images/F-img.png'
import Vector2 from '../../Assets/images/Group-2.png'
import YearText from '../../Assets/images/year-text-2.png'
import ArrowImg from '../../Assets/images/arrow-Vector.svg'
import { CirclesVectorImg } from './HeroSection'
import { Link } from 'gatsby'

const AboutSection = () => {
    return (
        <section className='lg:px-16 relative m-auto' style={{ maxWidth: '1519px' }}>
            <div className='absolute right-0 top-0 md:-mt-32 lg:-mt-48 -mt-24 block'>
                <img src={CirclesVectorImg} alt="" className='w-24 md:w-32 lg:w-48' />
            </div>

            <div className='w-full  lg:h-96 h-96  bg-primary overflow-hidden lg:rounded-3xl my-20 grid grid-cols-2 '>
                <div className='w-full relative '>
                    {/* bg vectors */}
                    <div className='rotate-180	 w-full lg:h-96 flex justify-end'>
                        <img src={Vector1} className={'absolute -z-0 -bottom-8 left-8'} alt="" />
                        <img src={Vector1} className={'absolute -z-0 bottom-0 '} alt="" />
                    </div>
                    {/* bg vectors */}


                </div>

                <div className='w-auto relative'>
                    {/* bg vectors */}
                    <div className='rotate-0 w-full lg:h-96 flex justify-end	overflow-hidden'>
                        <img src={Vector1} className={'absolute -z-0 -bottom-8 left-8'} alt="" />
                        <img src={Vector1} className={'absolute -z-0 bottom-0 '} alt="" />
                    </div>
                    {/* bg vectors */}



                </div>
            </div>

            <div className='lg:px-16 sm:px-12 px-5 w-full absolute overflow-hidden inset-0  lg:h-96 flex '>
                <div className='xl:w-4/12 lg:w-5/12 w-5/12 flex  h-full flex items-center justify-end sm:pr-10 pr-5'>

                    <div className='relative'>
                        <img src={FImg} className={'lg:w-72 sm:w-72 md:w-96 sm:w-72'} alt="" />
                        <img src={Vector2} className={'lg:w-32  md:w-28  sm:w-20 w-16 lg:h-32  md:h-28 w-16 sm:h-20 absolute bottom-0 right-0'} alt="" />
                    </div>

                </div>

                <div className=' flex lg:w-1/2 h-full w-7/12 flex-col items-start justify-center'>
                    <div>
                        <img src={YearText} className={'lg:w-20 md:w-16 sm:w-12 w-10'} alt="" />
                    </div>
                    <h2 className='text-white font-normal md:text-xl sm:text-lg text-base  lg:text-2xl mt-3'>Celebrating 25 Years of Excellence</h2>
                    <p className='text-white font-normal text-xs lg:text-sm  mt-3'>To all our customers, business partners and dedicated employees -  We humbly express our great thanks and gratitude towards you all for your continued support and commitment to EFS LOGISTICS</p>

                    <div className='flex items-center mt-3'>
                        <Link to='/company' className='text-white font-medium  border-b-2 border-white md:text-sm text-xs lg:text-base text-xxs'>Read more about our journey
                        </Link>
                        <img src={ArrowImg} alt="" className='ml-2 h-3' />
                    </div>
                </div>


            </div>

        </section>
    )
}

export default AboutSection