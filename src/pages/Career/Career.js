import React from 'react'
import CareerImg from '../../Assets/images/career.png'
// import { BlueVector } from '../Home/Service'
import BlueVector from '../../Assets/images/Ornament 11.png'
import CareerComponent from './CareerComponent'

const CareerPage = () => {
    return (
        <main className='container py-7'>
            <div>
                <h1 className='md:text-2xl text-xl lg:text-5xl text-primary font-semibold'>Careers at EFS Logistics</h1>
                <p className='w-96 mt-2 text-sm md:text-base'>Join our mission to make Reliable logistics solutions for all scale of businesses. We'd love to have more talented people on board. Check out our open positions below.</p>
            </div>

            <div className="md:grid md:grid-cols-2 flex flex-col-reverse">
                <div className='flex flex-col justify-center'>
                    <h3 className='text-primary font-black text-xl'>Current Openings</h3>

                    <CareerComponent />
                    <CareerComponent />
                </div>
                <div className='relative'>
                    <img src={CareerImg} alt="" className='z-50' />
                    <img src={BlueVector} style={{ zIndex: '-1' }} className="w-48 absolute  lg:-right-10 right-0 top-0" alt="" />

                </div>
            </div>

            <div>
                <h2 className='md:text-2xl text-lg mt-10 lg:text-5xl text-primary font-bold '>Intern at EFS</h2>
                <p >If you are interested in a career in logistics, or you want to apply your knowledge in practice, then we are exactly the right company for you. Apply for an internship with us and avail of the chance to participate in attractive and interesting projects and to gain an insight into daily business. We are looking forward to meeting you!
                    <br />
                    <br />
                    If you are interested in an internship or if you have any questions, please write us an e-mail:
                </p>
                <a href="" className='text-primary font-semibold'>internship@efslogistics.net</a>
            </div>
        </main>
    )
}

export default CareerPage
