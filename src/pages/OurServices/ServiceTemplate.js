import { Link } from 'gatsby'
import React from 'react'
import EnquiryComponent from '../../Components/EnquiryComponent'
import Layout from '../../Components/Layout/Layout'
import MailSubscribeSection from '../../Components/MailSubscribeSection/MailSubscribeSection'
import PlayBtnIcon from '../../Assets/images/Group 789 (1).png'

import YoutubeIcon from '../../Assets/images/youtube-icon.png'
import { BlueVectorImg } from '../Home/HeroSection'

const ServiceTemplate = (
    { title, description, portraitImage, landscapeImage,
        landscapeImageDescription, logos, youtubeLink,
        youtubeThumbnailImage, buttonText }) => {
    return (
        <Layout>
            <main className='container '>
                <section className='grid grid-cols-1 gap-5 lg:min-h-screen md:h-full py-10 lg:px-5'>
                    <div>
                        <h1 className='lg:text-5xl text-3xl  font-bold text-primary'>{title}</h1>
                        <p className='lg:w-10/12 w-full mt-2'>{description}</p>
                    </div>

                    <div className='relative'>
                        {/* <img src={RedVectorImg} className={'w-48 absolute z-0 2xl:-left-10 lg:-left-0 lg:bottom-0 lg:top-0 m-auto '} style={{ zIndex: -1 }} alt="" /> */}
                        <img src={BlueVectorImg} className={'w-48 absolute z-0 2xl:-right-10 lg:-right-0'} alt="" style={{ zIndex: -1 }} />

                        <div className='grid lg:grid-cols-2'>
                            <div>
                                <img src={portraitImage} className={'w-full scale-110	md:scale-100	'} alt="" />
                                <div>
                                    {/* <div>{portraitImageDescription}</div> */}
                                </div>
                            </div>
                            <div className='flex lg:flex-col flex-col-reverse'>
                                <img src={landscapeImage} className={'lg:-ml-12 w-full  scale-125	md:scale-100'} alt="" />
                                <div>
                                    <div>{landscapeImageDescription}</div>
                                    <div className="flex items-center h-20">
                                        {logos?.map(item => (
                                            <img src={item} className={'h-14 lg:mr-6'} alt="" />
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='py-10'>
                        <div className='flex flex-col w-full justify-center  items-center relative '>
                            <img src={youtubeThumbnailImage} alt="" className='h-72' />
                            <img src={PlayBtnIcon} alt="" className='absolute m-auto inset-0 cursor-default	 h-20 w-20		' />
                        </div>
                        <div className='flex items-center justify-center mt-5'>
                            <img className='h-7' src={YoutubeIcon} alt="" />
                            <Link to={youtubeLink} target={'_blank'} className='text-primary underline underline-offset-4 ml-2 font-bold w-60 '>{buttonText}</Link>
                        </div>

                        <div className="flex justify-center">
                            <EnquiryComponent />
                        </div>

                    </div>

                </section>
            </main>
            <section className='bg-primary'>
                <div className="container">
                    <MailSubscribeSection />
                </div>

            </section>
        </Layout>
    )
}

export default ServiceTemplate