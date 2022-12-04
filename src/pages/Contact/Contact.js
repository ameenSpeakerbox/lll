import React, { useRef, useState } from 'react'
import InputField from '../../Components/InputField/InputField'
import MailSubscribeSection from '../../Components/MailSubscribeSection/MailSubscribeSection'
import { CirclesVectorImg } from '../Home/HeroSection'
import AddressCard from './AddressCard'
import FbIcon from '../../Assets/Icons/bxl_facebook.svg'
import YoutubeIcon from '../../Assets/Icons/ant-design_youtube-outlined.svg'
import LinkedinIcon from '../../Assets/Icons/akar-icons_linkedin-fill.svg'
import InstagramIcon from '../../Assets/Icons/akar-icons_instagram-fill.svg'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const [formData, setformData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
    })
    const addressData = [
        {
            location: 'Jeddah', addres: `Rawdat Mahnna, Al Faisaliyah,
        Jeddah 23442 - 7477
        Saudi Arabia`, mobile: `+966 12 697 7232`, email: 'info@efslogistics.net',
            mapAddress: 'https://g.page/efslogistics?share'
        },
        {
            location: 'Riyadh', addres: `Umar Al Mukhtar Thulaim,
            Riyadh 12646 - 7600
            Saudi Arabia`, mobile: ` +966 11 295 7577`, email: 'riyadh@efslogistics.net',
            mapAddress: 'https://goo.gl/maps/VEpT2WhTg41oRNNf6'
        },
        {
            location: 'Dammam', addres: `Al Amir Muhammed Ibn Fahad Road, Ar Rabi, Dammam
            32241 - 56900`, mobile: `+966 13 835 3695`, email: 'dammam@efslogistics.net',
            mapAddress: 'https://goo.gl/maps/hhUtjviUDt33Fdrc6'
        },
    ]


    const handleChange = (e) => {
        setformData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_umdmyur', 'template_psu4q6e', form.current, '8x_6lWZzzmx-bEZbP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    console.log(formData)


    return (
        <>
            <main className='container py-7'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                    <div className='md:col-span-3'>
                        <h1 className='text-primary font-bold text-3xl'>Contact Us</h1>
                    </div>
                    <div className="md:col-span-2 col-span-3 ">
                        <form className="grid md:grid-cols-2 grid-cols-1 gap-7" ref={form}>

                            <InputField width={'w-full'} label={'First Name'} name={'first_name'} onchange={handleChange} />
                            <InputField width={'w-full'} label={'Last Name'} name={'last_name'} onchange={handleChange} />
                            <InputField width={'w-full'} label={'Email'} name={'email'} onchange={handleChange} />
                            <InputField width={'w-full'} label={'Phone'} name={'phone'} onchange={handleChange} />

                            <button onClick={sendEmail} className='subscribe___btn py-2 w-48 px-10 rounded-2xl transition-all duration-500 ease-in hover:shadow-xl text-white mt-5'>
                                submit
                            </button>
                        </form>
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
                                <a href={item.url} target={'_blank'} className='bg-secondary p-1 rounded  mr-2'>
                                    <img src={item.icon} className={'w-5'} alt="" />
                                </a>
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

export const Icons = [
    { icon: FbIcon, url: 'https://www.facebook.com/efslogistics?mibextid=LQQJ4d' },
    // { icon: InstagramIcon, url: '' },
    { icon: YoutubeIcon, url: 'https://www.youtube.com/@efslogistics2687' },
    { icon: LinkedinIcon, url: 'https://www.linkedin.com/company/efs-logistics-saudi-arabia/' },
]