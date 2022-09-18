import React, { useState } from 'react'
import InputField from '../../Components/InputField/InputField'

const GetAQoute = () => {
    const [tabId, settabId] = useState(1)

    const handleChangeTab = (id) => {
        settabId(id)
        console.log(id)
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
                    <div className="md:col-span-2 col-span-3">

                        <div className="grid md:grid-cols-2">
                            <div>
                                <div className="grid md:grid-cols-1 grid-cols-1 gap-5">
                                    <h3 className='font-semibold'>Company Details</h3>
                                    <InputField width={'w-full'} label={'Company Name'} />
                                    <InputField width={'w-full'} label={'Company '} />
                                    <InputField width={'w-full'} label={'Email'} />
                                    <InputField width={'w-full'} label={'Phone'} />
                                </div>
                                <div className="grid md:grid-cols-1 grid-cols-1 gap-5 mt-16">

                                    <h3 className='font-semibold'>Type of Service</h3>
                                    <InputField width={'w-full'} label={'Company Name'} />
                                    <h3 className='font-semibold'>Type of Cargo</h3>
                                    <InputField width={'w-full'} label={'Company '} />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 col-span-2  grid-cols-1 gap-12 mt-16">

                            <div className="col-span-2">
                                <h3 className='font-semibold mb-3'>Ship From (Origin)</h3>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <InputField width={'w-full'} label={'Country/Territory'} />
                                    <InputField width={'w-full'} label={'City/Town/Locality '} />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <h3 className='font-semibold mb-3'>Ship To (Destination)</h3>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <InputField width={'w-full'} label={'Country/Territory'} />
                                    <InputField width={'w-full'} label={'City/Town/Locality '} />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <h3 className='font-semibold mb-3'>Cargo Description</h3>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className='md:col-span-2'>
                                        <InputField width={'w-full md:w-full'} type={'textarea'} label={'Tell us more about your needs'} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <h3 className='font-semibold mb-3'>Pick up date</h3>
                                <div className="grid grid-cols-1 gap-5">
                                    <InputField width={'w-full'} label={'Select a date'} />

                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <h3 className='font-semibold mb-3'>Delivery Terms</h3>
                                <div className="grid grid-cols-1 gap-5">
                                    <InputField width={'w-full'} label={'eg. Door to Door'} />

                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <h3 className='font-semibold mb-3'>INCO Terms</h3>
                                <div className="grid grid-cols-1 gap-5">
                                    <InputField width={'w-full'} label={'INCO TERMS'} />

                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <h3 className='font-semibold mb-3 absolute'>When will it be a convenient time to call you back?</h3>
                                <div className="grid grid-cols-1 gap-5 mt-9">
                                    <InputField width={'w-full'} label={'Choose suitable time'} />

                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <button className='subscribe___btn py-2 w-48 px-10 rounded-2xl transition-all duration-500 ease-in hover:shadow-xl text-white mt-5'>
                                    Subscribe
                                </button>
                            </div>
                        </div>





                    </div>
                    :
                    <div className="md:col-span-2 col-span-3">

                        <div className="grid md:grid-cols-1">
                            <div className="grid md:grid-cols-1 grid-cols-1 gap-5">
                                <div className='grid grid-cols-2 gap-5'>
                                    <h3 className='col-span-2 font-semibold'>Personal Details</h3>
                                    <InputField width={'w-full'} label={'First Name'} />
                                    <InputField width={'w-full'} label={'Last Name'} />
                                    <InputField width={'w-full'} label={'Company '} />
                                    <InputField width={'w-full'} label={'Email'} />
                                    <InputField width={'w-full'} label={'Phone'} />
                                </div>

                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 col-span-2  grid-cols-1 gap-12 mt-16">

                            <div className="col-span-2">
                                <h3 className='font-semibold mb-3'>Moving From (Origin)</h3>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <InputField width={'w-full'} label={'Country/Territory'} />
                                    <InputField width={'w-full'} label={'City/Town/Locality '} />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <h3 className='font-semibold mb-3'>Moving To (Destination)</h3>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <InputField width={'w-full'} label={'Country/Territory'} />
                                    <InputField width={'w-full'} label={'City/Town/Locality '} />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <h3 className='font-semibold mb-3'>Who is Moving</h3>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <InputField width={'w-full'} label={'No.of Adults'} />
                                    <InputField width={'w-full'} label={'No.of Kids'} />
                                </div>
                            </div>


                            <div className="col-span-2 md:col-span-1">
                                <h3 className='font-semibold mb-3'>Why are you Moving?</h3>
                                <div className="grid grid-cols-1 gap-5">
                                    <InputField width={'w-full'} label={'eg. Family Reasons'} />

                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <h3 className='font-semibold mb-3'>What are you Moving?</h3>
                                <div className="grid grid-cols-1 gap-5">
                                    <InputField width={'w-full'} label={'eg. 1-2 Bedroom Home'} />

                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-2">
                                <div className="grid md:grid-cols-2">
                                    <div>

                                        <h3 className='font-semibold mb-3'>Pick up date</h3>
                                        <div className="grid grid-cols-1 gap-5">
                                            <InputField width={'w-full'} label={'Select a date'} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-2">
                                <div className="grid md:grid-cols-2">
                                    <div>

                                        <h3 className='font-semibold mb-3'>When will it be a convenient time to call you back?</h3>
                                        <div className="grid grid-cols-1 gap-5">
                                            <InputField width={'w-full'} label={'Choose suitable time'} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-span-2 md:col-span-1">
                                <button className='subscribe___btn py-2 w-48 px-10 rounded-2xl transition-all duration-500 ease-in hover:shadow-xl text-white mt-5'>
                                    Submit
                                </button>
                            </div>
                        </div>





                    </div>
                }





            </div>

        </main>
    )
}

export default GetAQoute