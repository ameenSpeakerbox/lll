import React, { useRef, useState } from 'react'
// import '../../Index.css'
import emailjs from '@emailjs/browser';
import Modal from '../Modal/Modal';


const MailSubscribeSection = () => {
    const ref = useRef()
    const [mail, setmail] = useState('')
    const [ModalData, setModalData] = useState({ isopen: false, title: '', content: '', buttonName: '' })
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qpr7q39', 'template_9jwefvm', ref.current, 'OTMiGmfljPouqWMMa')
            .then((result) => {
                console.log(result.text);
                setModalData(prev => ({ ...prev, isopen: true, title: 'Thank you for subscribing!', content: 'You will be receiving monthly newsletters to your mail from now on.', buttonName: 'OK' }))

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='py-10'>
            <div className=' border-b border-white' />

            <div className='grid md:grid-cols-2 gap-5 py-14'>
                <div className='text-white'>
                    <h4 className='font-medium lg:text-3xl text-xl'>Let’s Stay Connected!</h4>
                    <p className='font-light lg:text-2xl text-sm w-11/12'>
                        Sign up for our monthly newsletter and get regular updates.
                    </p>
                </div>


                <form ref={ref} className='flex flex-col md:items-end'>
                    <input type="text" onChange={(e) => setmail(e.target.value)} value={mail} className='rounded-full md:w-10/12 h-10 p-5 text-xm lg:text-xl' placeholder='Enter your email here' />
                    <button onClick={sendEmail} disabled={!mail || ValidateEmail(mail)} title={!mail && 'Mail Id is required' || ValidateEmail(mail) && 'Invalid Email id'} className='subscribe___btn w-40 py-2 px-10 rounded-2xl transition-all duration-500 ease-in hover:shadow-xl text-sm lg:text-lg text-white mt-5'>Subscribe</button>
                </form>
            </div>

            <div className=' border-b border-white' />

            {ModalData.isopen &&
                <Modal content={ModalData.content} title={ModalData.title} buttonName={ModalData.buttonName} isOpen={ModalData.isopen} onClose={() => setModalData(prev => ({ ...prev, isopen: false }))} />
            }

        </div>
    )
}

export default MailSubscribeSection
function ValidateEmail(email) {
    console.log("email validation ", email)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("email validation ", re.test(String(email).toLowerCase()))
    return re.test(String(email).toLowerCase());
}