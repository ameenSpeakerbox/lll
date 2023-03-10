import React from 'react'
import { themeImg } from '../../Components/ImageComponent/ImageComponent'
import Icon from '../../Assets/Icons/Group 1032.png'

const MissionAndVision = () => {
    const data = [
        { title: 'Mission', content: `To be a company focused on cooperating with people to develop mutually beneficial relationships through highest quality service. To be client-centric and provide customized solutions based on individual customer needs.` },
        { title: 'Vision', content: `To be the leading Saudi Arabian logistics services company recognized for reliability, values and commitment to customers.        ` },
        {
            title: 'Objective', content: `We seek to serve our clients with excellence and morals in all that we do.
        We as a team aim to deliver outstanding customer experience by reducing transportation & logistics cost, reducing response time and increasing efficiency because we equally share the importance of your shipment.`},
    ]
    return (
        <>
            <div className='h-5 w-full md:block hidden' style={{ background: '#6193C5' }} />
            <section className='container '>

                {data.map(item => (
                    <div className='grid  grid-cols-1 py-5'>

                        <>
                            <div className='flex mb-3'>
                                <img src={themeImg} style={{ transform: 'scaleX(-1)' }} className={'h-9'} alt="" />
                                <h2 className='text-primary text-3xl font-semibold ml-3'>{item.title}</h2>
                            </div>
                            <p className='w-10/12'>
                                {item.content}
                            </p>
                        </>
                    </div>
                ))}

                <div className='mb-10'>
                    <a href='https://efslogistics-my.sharepoint.com/:b:/g/personal/nadir_kalappadan_efslogistics_net/EbO_mNQsnr9EtAs7QC14fIMB6wuBGYcX664wkO6NsOKVow?e=DtHvgi'
                        download={true} target={'_blank'} className='subscribe___btn w-48 md:w-56 flex   items-center   py-2 px-5 rounded-2xl transition-all duration-500 ease-in hover:shadow-xl text-sm lg:text-lg text-white mt-5'>Download Brochure
                        <img src={Icon} alt="" className='ml-2 ' />
                    </a>

                </div>
            </section>
        </>
    )
}

export default MissionAndVision