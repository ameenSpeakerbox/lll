import React from 'react'
import QouteIcon from '../../Assets/images/Quote.svg'
import VectorIcon from '../../Assets/images/Vector-1.svg'
import VectorIcon2 from '../../Assets/images/Group 767.svg'
import Image from '../../Assets/images/Rectangle 11.png'

const FirstSection = () => {
    return (
        <main className='container'>
            <section className='grid grid-cols-3 gap-5 min-h-screen py-10'>
                <div className='col-span-1'>
                    <div>
                        <img src={QouteIcon} alt="" className='h-4' />
                        <h1 className='text-primary text-3xl font-bold'>Humble Beginnings</h1>
                        <p className='italic text-secondary text-lg'>Where it all started.</p>
                        <p className='mt-2 xl:w-4/5'>
                            Express Forwarding Services (EFS), the forwarding division of UM.Fawaz Trading Est. was incorporated in early 1994 on humble beginnings with only 5 employees. Within a few years, EFS achieved a remarkable growth in the Kingdom and expanded to various regions in the Kingdom as a world-class provider of innovative logistics and supply-chain services and solutions. Our dedicated and experienced professionals always provide you with tailor-made logistics solutions, customized to your particular needs.
                        </p>

                        <img src={VectorIcon} className={'absolute left-0 bottom-0 h-60'} alt="" />
                    </div>
                </div>

                <div className="col-span-2">
                    <div className='flex justify-end relative'>
                        <img src={Image} className="w-4/5" alt="" />
                        <img src={VectorIcon2} className="absolute right-0 bottom-0" alt="" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default FirstSection