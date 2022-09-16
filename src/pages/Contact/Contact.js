import React from 'react'
import InputField from '../../Components/InputField/InputField'
import MailSubscribeSection from '../../Components/MailSubscribeSection/MailSubscribeSection'
import { CirclesVectorImg } from '../Home/HeroSection'
import AddressCard from './AddressCard'

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
    return (
        <>
            <main className='container py-7'>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-3'>
                        <h1 className='text-primary font-bold text-3xl'>Contact Us</h1>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-7">

                        <InputField width={'w-full'} label={'First Name'} />
                        <InputField width={'w-full'} label={'Last Name'} />
                        <InputField width={'w-full'} label={'Email'} />
                        <InputField width={'w-full'} label={'Phone'} />
                        <div className='col-span-2'>
                            <InputField width={'w-full'} type={'textarea'} label={'Tell us more about your needs'} />
                        </div>
                        <button className='subscribe___btn py-2 w-48 px-10 rounded-2xl transition-all duration-500 ease-in hover:shadow-xl text-white mt-5'>
                            submit
                        </button>
                    </div>
                    <div className="col-span-1">
                        <img src={CirclesVectorImg} className={'absolute right-0 bottom-20 h-40'} alt="" />
                    </div>
                    <div className="col-span-3 mt-5">
                        <h2 className='text-primary font-bold text-3xl'>Our Locations</h2>
                    </div>
                    {addressData.map(item => (
                        <div className=''>

                            <AddressCard data={item} />
                        </div>
                    ))}
                    <div className="col-span-1 mt-10 ">
                        <h5 className='text-primary underline-offset-4 underline text-xl'>Follow us on</h5>
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