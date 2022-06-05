import React from 'react'
import Vector1 from '../../Assets/images/Ellipse 9.png'
import FImg from '../../Assets/images/F-img.png'
import Vector2 from '../../Assets/images/Group-2.png'
import YearText from '../../Assets/images/year-text-2.png'

const AboutSection = () => {
    return (
        <section className='lg:px-16 relative'>
            <div className='w-full  lg:h-96  bg-primary overflow-hidden lg:rounded-xl my-20 grid grid-cols-2 '>
                <div className='w-full relative '>
                    {/* bg vectors */}
                    <div className='rotate-180	 w-full lg:h-96 '>
                        <img src={Vector1} className={'absolute -z-0 -bottom-8 left-8'} alt="" />
                        <img src={Vector1} className={'absolute -z-0 bottom-0 '} alt="" />
                    </div>
                    {/* bg vectors */}


                </div>

                <div className='w-auto relative'>
                    {/* bg vectors */}
                    <div className='rotate-0 w-full lg:h-96 	overflow-hidden'>
                        <img src={Vector1} className={'absolute -z-0 -bottom-8 left-8'} alt="" />
                        <img src={Vector1} className={'absolute -z-0 bottom-0 '} alt="" />
                    </div>
                    {/* bg vectors */}



                </div>
            </div>

            <div className='w-full absolute overflow-hidden inset-0  lg:h-96 grid grid-cols-5 '>
                <div className='col-span-2 flex w-full h-full flex items-center justify-center'>

                    <div className='relative'>
                        <img src={FImg} className={'w-72 h-72'} alt="" />
                        <img src={Vector2} className={'w-32 h-32 absolute bottom-0 right-0'} alt="" />
                    </div>

                </div>

                <div className='col-span-3 flex w-full h-full flex-col items-start justify-center'>
                    <div>
                        <img src={YearText} className={'lg:w-20'} alt="" />
                    </div>
                    <h2 className='text-white font-normal text-xl mt-3'>Celebrating 25 Years of Excellence</h2>
                    <p className='text-white font-normal text-sm mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras morbi ut ac orci, porta. Praesent purus faucibus integer feugiat et, euismod sit. </p>
                </div>


            </div>

        </section>
    )
}

export default AboutSection