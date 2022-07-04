import React from 'react'
import MailSubscribeSection from '../../Components/MailSubscribeSection/MailSubscribeSection'
import RedVector from '../../Assets/images/Ornament 12.png'
import WhiteVector from '../../Assets/images/Ornament 13.png'
import WhiteDotsVector from '../../Assets/images/white-dots.svg'
import RedDotsVector from '../../Assets/images/red-dots.svg'
import GroupPhoto from '../../Assets/images/mngmt.png'
import QouteIcon from '../../Assets/images/Quote.svg'
import QouteRedIcon from '../../Assets/images/Quote-red.svg'

const ManagementSection = () => {
    return (
        <section className=' bg-primary py-20  '>
            <div className='container h-auto xl:px-10 relative'>
                <div className='grid grid-cols-1 '>
                    <h2 className='text-white text-2xl font-medium mb-5'>Message from the Management</h2>
                    <img src={GroupPhoto} className={'border-4 border-white rounded-2xl z-10'} alt="" />
                </div>
                <div>
                    <img src={RedVector} className="w-48 absolute -bottom-20 z-0 -left-10" alt="" />
                    <img src={WhiteVector} className="w-48 absolute z-0 2xl:-right-10 lg:-right-8" alt="" />
                </div>
                <div className="grid grid-cols-1 relative mt-10">
                    <div className='flex justify-end'>
                        <div className='bg-white w-3/4 flex justify-between p-6 rounded-xl z-10'>
                            <div className='w-36'>
                                <img src={QouteIcon} alt="" />
                            </div>
                            <div>

                                <p>
                                    Every step of EFS accentuates Saudi’s National Vision 2030 and embodies a truly Saudi identity, which by virtue of hard work has steadily emerged into a pioneering and highly diversified business conglomerate in short span of time.
                                </p>
                                <p className='mt-3'>
                                    Under the visionary leadership of His Highness the Custodian of Two Holy Mosques King Salman Bin Abdul Aziz, the Kingdom Of Saudi Arabia has certainly provided the perfect environment for EFS to thrive and explore new frontiers. EFS will continue to move in step with the vision of Saudi Arabia as we work even harder towards helping build a more prosperous and sustainable future.
                                </p>
                            </div>
                            <div className='w-32 flex items-end'>
                                <img src={QouteRedIcon} alt="" />
                            </div>
                        </div>


                    </div>
                </div>


            </div>

            <div className='pt-28 container'>
                <div className='grid grid-cols-1'>
                    {/* <img src={WhiteDotsVector} className="w-40" alt="" /> */}
                    {/* <img src={RedVector} className="w-48 absolute -bottom-20 -left-10" alt="" /> */}
                    <MailSubscribeSection />

                    <div className='flex justify-end'>
                        {/* <img src={RedDotsVector} className="w-40" alt="" /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ManagementSection