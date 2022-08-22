import React from 'react'
import Vector1 from '../../Assets/images/Ellipse 9.png'
import FImg from '../../Assets/images/F-img.png'
import Vector2 from '../../Assets/images/Group-2.png'
import YearText from '../../Assets/images/year-text-2.png'
import ArrowImg from '../../Assets/images/arrow-Vector.svg'

const AboutSection = () => {
    return (
        <section className='lg:px-16 relative m-auto' style={{ maxWidth: '1519px' }}>
            <div className='w-full  lg:h-96  bg-primary overflow-hidden lg:rounded-3xl my-20 grid grid-cols-2 '>
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

            <div className='lg:px-16 w-full absolute overflow-hidden inset-0  lg:h-96 flex '>
                <div className='xl:w-4/12 lg:w-5/12 flex  h-full flex items-center justify-end pr-10'>

                    <div className='relative'>
                        <img src={FImg} className={'lg:w-72 md:w-60 lg:h-72 md:w-60'} alt="" />
                        <img src={Vector2} className={'w-32 h-32 absolute bottom-0 right-0'} alt="" />
                    </div>

                </div>

                <div className=' flex lg:w-1/2 h-full flex-col items-start justify-center'>
                    <div>
                        <img src={YearText} className={'lg:w-20'} alt="" />
                    </div>
                    <h2 className='text-white font-normal text-2xl mt-3'>Celebrating 25 Years of Excellence</h2>
                    <p className='text-white font-normal text-sm mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras morbi ut ac orci, porta. Praesent purus faucibus integer feugiat et, euismod sit. </p>

                    <div className='flex items-center mt-3'>
                        <p className='text-white font-medium  border-b-2 border-white'>Read more about our journey
                        </p>
                        <img src={ArrowImg} alt="" className='ml-2 h-3' />
                    </div>
                </div>


            </div>

        </section>
    )
}

export default AboutSection