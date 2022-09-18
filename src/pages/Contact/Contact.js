import React from 'react'
import InputField from '../../Components/InputField/InputField'
import MailSubscribeSection from '../../Components/MailSubscribeSection/MailSubscribeSection'
import { CirclesVectorImg } from '../Home/HeroSection'
import AddressCard from './AddressCard'
import FbIcon from '../../Assets/Icons/bxl_facebook.svg'
import YoutubeIcon from '../../Assets/Icons/ant-design_youtube-outlined.svg'
import LinkedinIcon from '../../Assets/Icons/akar-icons_linkedin-fill.svg'
import InstagramIcon from '../../Assets/Icons/akar-icons_instagram-fill.svg'

const Contact = () => {
    const addressData = [
        {
            location: 'Jeddah', addres: `Rawdat Mahnna, Al Faisaliyah,
        Jeddah 23442 - 7477
        Saudi Arabia`, mobile: `+966 12 697 7232`, email: 'info@efslogistics.net'
        },
        {
            location: 'Riyadh', addres: `Umar Al Mukhtar Thulaim,
            Riyadh 12646 - 7600
            Saudi Arabia`, mobile: ` +966 11 295 7577`, email: 'riyadh@efslogistics.net'
        },
        {
            location: 'Dammam', addres: `Al Amir Muhammed Ibn Fahad Road, Ar Rabi, Dammam
            32241 - 56900`, mobile: `+966 13 835 3695`, email: 'dammam@efslogistics.net'
        },
    ]

    const Icons = [
        { icon: FbIcon, url: '' },
        { icon: InstagramIcon, url: '' },
        { icon: YoutubeIcon, url: '' },
        { icon: LinkedinIcon, url: '' },
    ]

    return (
        <>
            <main className='container py-7'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                    <div className='md:col-span-3'>
                        <h1 className='text-primary font-bold text-3xl'>Contact Us</h1>
                    </div>
                    <div className="md:col-span-2 col-span-3 ">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-7">

                            <InputField width={'w-full'} label={'First Name'} />
                            <InputField width={'w-full'} label={'Last Name'} />
                            <InputField width={'w-full'} label={'Email'} />
                            <InputField width={'w-full'} label={'Phone'} />
                        
                            <button className='subscribe___btn py-2 w-48 px-10 rounded-2xl transition-all duration-500 ease-in hover:shadow-xl text-white mt-5'>
                                submit
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-1">
                        <img src={CirclesVectorImg} className={'absolute right-0 bottom-20 h-40'} alt="" />
                    </div>
                    <div className="md:col-span-3 col-span-1 mt-5">
                        <h2 className='text-primary font-bold text-3xl'>Our Locations</h2>
                    </div>
                    {addressData.map(item => (
                        <div className=''>

                            <AddressCard data={item} />
                        </div>
                    ))}
                    <div className="col-span-1 mt-10 ">
                        <h5 className='text-primary underline-offset-4 underline text-xl'>Follow us on</h5>
                        <div className="flex mt-2">

                            {Icons.map(item => (
                                <div className='bg-secondary p-1 rounded  mr-2'>
                                    <img src={item.icon} className={'w-5'} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </main>
            <div className="bg-primary ">
                <div className="container">

                    <MailSubscribeSection />
                </div>
            </div>
        </>
    )
}

export default Contact