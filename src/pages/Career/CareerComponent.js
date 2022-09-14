import React from 'react'
import userIcon from '../../Assets/images/bi_person-fill.svg'

const CareerComponent = () => {
    return (
        <div className='flex flex-col md:flex-row gap-2 mt-5 border-t-2 border-black	pt-7'>
            <div>
                <img src={userIcon} alt="" />
            </div>
            <div className='w-full'>
                <h4 className='font-semibold text-sm md:text-base'>Accounting Associate</h4>
                <div className="flex justify-between">
                    <div className='flex text-sm md:text-base'>
                        <p>No. of Vacancies: 2</p>
                        <p className='ml-4 italic font-medium'>Location: Riyadh</p>
                    </div>

                </div>
                <h5 className='font-bold italic mt-2 text-sm'>JOB DESCRIPTION</h5>
                <p className='w-72 text-sm md:text-base'>Qualification: Bachelor’s Degree
                    Computer knowledge ( Preferable)
                    Good Communication Skill</p>
            </div>
            <div>
                <button className='bg-primary text-white px-8 italic font-semibold  py-1 rounded-full md:text-base text-sm' style={{ boxShadow: '0px 0px 13.4px 4.46667px rgba(0, 0, 0, 0.2)' }}>Apply</button>
            </div>
        </div>
    )
}

export default CareerComponent