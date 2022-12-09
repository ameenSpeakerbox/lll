import React, { useRef, useState } from 'react'
import InputField from '../../Components/InputField/InputField'
import emailjs from '@emailjs/browser';
import { comment } from 'postcss';
import Modal from '../../Components/Modal/Modal';

const GetAQoute = () => {
    const FormForCommercial = useRef()
    const FormForRelocation = useRef()
    const [tabId, settabId] = useState(1)
    const [CommercialFormData, setCommercialFormData] = useState({
        company_name: '',
        company: '',
        company_email: '',
        company_phone: '',
        type_of_service: '',
        type_of_cargo: '',
        ship_from_country: '',
        ship_from_city: '',
        ship_to_country: '',
        ship_to_city: '',
        cargo_description: '',
        pickup_date: '',
        delivery_terms: '',
        inco_terms: '',
        callback_time: '',
    })
    const [RelocationFormData, setRelocationFormData] = useState({
        first_name: '',
        last_name: '',
        company: '',
        email: '',
        phone: '',
        move_from_city: '',
        move_from_country: '',
        move_to_city: '',
        move_to_country: '',
        no_of_adults: '',
        no_of_kids: '',
        pickup_date: '',
        callback_time: '',
        what_are_you_moving: '',
        moving_reason: '',
    })

    const [ModalData, setModalData] = useState({ isopen: false, title: '', content: '', buttonName: '' })

    const handleCommercialFormChange = (e) => {
        setCommercialFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleRelocationFormChange = (e) => {
        setRelocationFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    console.log({ CommercialFormData })
    const handleChangeTab = (id) => {
        settabId(id)
        console.log(id)
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        // for (var n in CommercialFormData) {
        //     console.log(CommercialFormData[n].length ? true : false)
        // }
        // return

        emailjs.sendForm('service_umdmyur', 'template_eo72i9q', FormForCommercial.current, '8x_6lWZzzmx-bEZbP')
            .then((result) => {
                console.log(result.text);
                setModalData(prev => ({ ...prev, isopen: true,title:'Thank You! We’ll be in touch soon!', content: 'We’ve received your request for a quote. You will receive a response from our executive shortly.  ', buttonName: 'OK' }))
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleRelocationSubmit = (e) => {

        for (let n in RelocationFormData) {
            console.log(n, RelocationFormData[n])
        }


        e.preventDefault();


        // return
        emailjs.sendForm('service_qpr7q39', 'template_9jwefvm', FormForRelocation.current, 'OTMiGmfljPouqWMMa')
            .then((result) => {
                console.log(result.text);
                setModalData(prev => ({ ...prev, isopen: true,title:'Thank You! We’ll be in touch soon!', content: 'We’ve received your request for a quote. You will receive a response from our executive shortly.  ', buttonName: 'OK' }))

            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <main className='container py-7'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                <div className='md:col-span-3'>
                    <h1 className='text-primary font-bold text-4xl'>Request a Quote</h1>
                    <div className='bg-sky-100 w-max rounded-full my-5'>
                        <button className={`px-2 py-1 ${tabId == 1 ? 'bg-primary text-white rounded-full' : 'text-primary'}`} onClick={() => handleChangeTab(1)}>Commercial </button>
                        <button className={`px-2 py-1 ${tabId == 2 ? 'bg-primary text-white rounded-full' : 'text-primary'}`} onClick={() => handleChangeTab(2)}>Relocation </button>
                    </div>
                </div>
                {tabId == 1 ?
                    <form className="md:col-span-2 col-span-3" ref={FormForCommercial}>

                        <div className="grid md:grid-cols-2">
                            <div>
                                <div className="grid md:grid-cols-1 grid-cols-1 gap-5">
                                    <h3 className='font-semibold'>Company Details</h3>
                                    <InputField width={'w-full'} label={'Name'} name={'company_name'} value={CommercialFormData.company_name} onchange={handleCommercialFormChange} />
                                    <InputField width={'w-full'} label={'Company '} name={'company'} value={CommercialFormData.company} onchange={handleCommercialFormChange} />
                                    <InputField width={'w-full'} type={'email'} label={'Email'} name={'company_email'} value={CommercialFormData.company_email} onchange={handleCommercialFormChange} />
                                    <InputField width={'w-full'} type={'number'} label={'Phone'} name={'company_phone'} value={CommercialFormData.company_phone} onchange={handleCommercialFormChange} />
                                </div>
                                <div className="grid md:grid-cols-1 grid-cols-1 gap-5 mt-16">

                                    <h3 className='font-semibold'>Type of Service</h3>
                                    <InputField width={'w-full'} label={'eg. Air Freight'} name={'type_of_service'} value={CommercialFormData.type_of_service} onchange={handleCommercialFormChange} />
                                    <h3 className='font-semibold'>Type of Cargo</h3>
                                    <InputField width={'w-full'} label={'eg. Relocation'} name={'type_of_cargo'} value={CommercialFormData.type_of_cargo} onchange={handleCommercialFormChange} />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 col-span-2  grid-cols-1 gap-12 mt-16">

                            <div className="col-span-2">
                                <h3 className='font-semibold mb-3'>Ship From (Origin)</h3>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <InputField width={'w-full'} label={'Country/Territory'} name={'ship_from_country'} value={CommercialFormData.ship_from_country} onchange={handleCommercialFormChange} />
                                    <InputField width={'w-full'} label={'City/Town/Locality '} name={'ship_from_city'} value={CommercialFormData.ship_from_city} onchange={handleCommercialFormChange} />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <h3 className='font-semibold mb-3'>Ship To (Destination)</h3>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <InputField width={'w-full'} label={'Country/Territory'} name={'ship_to_country'} value={CommercialFormData.ship_to_country} onchange={handleCommercialFormChange} />
                                    <InputField width={'w-full'} label={'City/Town/Locality '} name={'ship_to_city'} value={CommercialFormData.ship_to_city} onchange={handleCommercialFormChange} />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <h3 className='font-semibold mb-3'>Cargo Description</h3>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className='md:col-span-2'>
                                        <InputField width={'w-full md:w-full'} type={'textarea'} label={'Tell us more about your needs'} name={'cargo_description'} value={CommercialFormData.cargo_description} onchange={handleCommercialFormChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <h3 className='font-semibold mb-3'>Pick up date</h3>
                                <div className="grid grid-cols-1 gap-5">
                                    <InputField width={'w-full'} type={'date'} label={'Select a date'} name={'pickup_date'} value={CommercialFormData.pickup_date} onchange={handleCommercialFormChange} />

                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <h3 className='font-semibold mb-3'>Delivery Terms</h3>
                                <div className="grid grid-cols-1 gap-5">
                                    <InputField width={'w-full'} label={'eg. Door to Door'} name={'delivery_terms'} value={CommercialFormData.delivery_terms} onchange={handleCommercialFormChange} />

                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <h3 className='font-semibold mb-3'>INCO Terms</h3>
                                <div className="grid grid-cols-1 gap-5">
                                    <InputField width={'w-full'} label={'INCO TERMS'} name={'inco_terms'} value={CommercialFormData.inco_terms} onchange={handleCommercialFormChange} />

                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <h3 className='font-semibold mb-3 absolute'>When will it be a convenient time to call you back?</h3>
                                <div className="grid grid-cols-1 gap-5 mt-9">
                                    <InputField width={'w-full'} type={'time'} label={'Choose suitable time'} name={'callback_time'} value={CommercialFormData.callback_time} onchange={handleCommercialFormChange} />

                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <button disabled={!(CommercialFormData.company_email || CommercialFormData.company_phone)} onClick={handleSubmit} title={!(CommercialFormData.company_email || CommercialFormData.company_phone) && 'Email or phone is required'} className='subscribe___btn py-2 w-48 px-10 rounded-2xl transition-all duration-500 ease-in hover:shadow-xl text-white mt-5'>
                                    Submit
                                </button>
                            </div>
                        </div>





                    </form>
                    :
                    <form ref={FormForRelocation} className="md:col-span-2 col-span-3">

                        <div className="grid md:grid-cols-1">
                            <div className="grid md:grid-cols-1 grid-cols-1 gap-5">
                                <div className='grid grid-cols-2 gap-5'>
                                    <h3 className='col-span-2 font-semibold'>Personal Details</h3>
                                    <InputField name={'first_name'} onchange={handleRelocationFormChange} value={RelocationFormData.first_name} width={'w-full'} label={'First Name'} />
                                    <InputField name={'last_name'} onchange={handleRelocationFormChange} value={RelocationFormData.last_name} width={'w-full'} label={'Last Name'} />
                                    <InputField name={'company'} onchange={handleRelocationFormChange} value={RelocationFormData.company} width={'w-full'} label={'Company '} />
                                    <InputField name={'email'} onchange={handleRelocationFormChange} value={RelocationFormData.email} width={'w-full'} label={'Email'} />
                                    <InputField type={'number'} name={'phone'} onchange={handleRelocationFormChange} value={RelocationFormData.phone} width={'w-full'} label={'Phone'} />
                                </div>

                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 col-span-2  grid-cols-1 gap-12 mt-16">

                            <div className="col-span-2">
                                <h3 className='font-semibold mb-3'>Moving From (Origin)</h3>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <InputField name={'move_from_country'} onchange={handleRelocationFormChange} value={RelocationFormData.move_from_country} width={'w-full'} label={'Country/Territory'} />
                                    <InputField name={'move_from_city'} onchange={handleRelocationFormChange} value={RelocationFormData.move_from_city} width={'w-full'} label={'City/Town/Locality '} />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <h3 className='font-semibold mb-3'>Moving To (Destination)</h3>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <InputField name={'move_to_country'} onchange={handleRelocationFormChange} value={RelocationFormData.move_to_country} width={'w-full'} label={'Country/Territory'} />
                                    <InputField name={'move_to_city'} onchange={handleRelocationFormChange} value={RelocationFormData.move_to_city} width={'w-full'} label={'City/Town/Locality '} />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <h3 className='font-semibold mb-3'>Who is Moving</h3>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <InputField type={'number'} name={'no_of_adults'} onchange={handleRelocationFormChange} value={RelocationFormData.no_of_adults} width={'w-full'} label={'No.of Adults'} />
                                    <InputField type={'number'} name={'no_of_kids'} onchange={handleRelocationFormChange} value={RelocationFormData.no_of_kids} width={'w-full'} label={'No.of Kids'} />
                                </div>
                            </div>


                            <div className="col-span-2 md:col-span-1">
                                <h3 className='font-semibold mb-3'>Why are you Moving?</h3>
                                <div className="grid grid-cols-1 gap-5">
                                    <InputField name={'moving_reason'} onchange={handleRelocationFormChange} value={RelocationFormData.moving_reason} width={'w-full'} label={'eg. Family Reasons'} />

                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <h3 className='font-semibold mb-3'>What are you Moving?</h3>
                                <div className="grid grid-cols-1 gap-5">
                                    <InputField name={'what_are_you_moving'} onchange={handleRelocationFormChange} value={RelocationFormData.what_are_you_moving} width={'w-full'} label={'eg. 1-2 Bedroom Home'} />

                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-2">
                                <div className="grid md:grid-cols-2">
                                    <div>

                                        <h3 className='font-semibold mb-3'>Pick up date</h3>
                                        <div className="grid grid-cols-1 gap-5">
                                            <InputField type={'date'} name={'pickup_date'} onchange={handleRelocationFormChange} value={RelocationFormData.pickup_date} width={'w-full'} label={'Select a date'} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-2">
                                <div className="grid md:grid-cols-2">
                                    <div>

                                        <h3 className='font-semibold mb-3'>When will it be a convenient time to call you back?</h3>
                                        <div className="grid grid-cols-1 gap-5">
                                            <InputField type={'time'} name={'callback_time'} onchange={handleRelocationFormChange} value={RelocationFormData.callback_time} width={'w-full'} label={'Choose suitable time'} />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <button disabled={!(RelocationFormData.email || RelocationFormData.phone)} onClick={handleRelocationSubmit} title={!(RelocationFormData.email || RelocationFormData.phone) && 'Email or phone is required'} className='subscribe___btn py-2 w-48 px-10 rounded-2xl transition-all duration-500 ease-in hover:shadow-xl text-white mt-5'>
                                    Submit
                                </button>
                            </div>
                        </div>





                    </form>
                }



                {ModalData.isopen &&
                    <Modal content={ModalData.content} title={ModalData.title} buttonName={ModalData.buttonName} isOpen={ModalData.isopen} onClose={() => setModalData(prev => ({ ...prev, isopen: false }))} />
                }

            </div>

        </main>
    )
}

export default GetAQoute
