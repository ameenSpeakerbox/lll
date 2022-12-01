import React from 'react'
import RedVector from '../../Assets/images/Ornament 12.png'
import WhiteVector from '../../Assets/images/Ornament 13.png'
import PlaneImg from '../../Assets/images/Rectangle 24.png'
import ShipImg from '../../Assets/images/Rectangle 25.png'
import TruckImg from '../../Assets/images/Rectangle 26.png'
import PlaneIcon from '../../Assets/images/Vector.svg'
import ShipIcon from '../../Assets/images/Vector-3.svg'
import TruckIcon from '../../Assets/images/Vector-2.svg'
import WhiteDotsVector from '../../Assets/images/white-dots.svg'
import RedDotsVector from '../../Assets/images/red-dots.svg'
import ServiceCard from '../../Components/Cards/ServiceCard'
import MailSubscribeSection from '../../Components/MailSubscribeSection/MailSubscribeSection'
import { graphql, Link, useStaticQuery } from 'gatsby'


const ServiceSection = () => {
    const services = [
        { image: PlaneImg, icon: PlaneIcon, title: 'Air Freight', desc: 'We handle all types of shipments including sensitive by time, hazardous nature, abnormal size and perishables with utmost care and speed to & from world wide destinations.' },
        { image: ShipImg, icon: ShipIcon, title: 'Sea Freight', desc: 'We handle all types of sea freight shipmentsfrom FCL & LCL to break-bulk and RORO.We are one of the leading firms having direct consolidation to/from various destinations/origins around the globe.' },
        { image: TruckImg, icon: TruckIcon, title: 'Land Freight', desc: 'EFS is a licensed transport company with our own fleet of trailer heads in Saudi Arabia offering trucking services domestic & cross-country transportation of various shipments. We handle normal & heavy lift transport to and from national & international destination.' },
    ]
    const data = useStaticQuery(graphql`
    query{
    allContentfulServices {
    edges {
      node {
        slug
        buttonText
        title
        primaryImage {
            file {
              url
            }
          }
        
        description{
            description
        }
        
        
      }
    }
  }
}`)

    return (
        <section className=' bg-primary py-20 overflow-hidden '>
            <div className='container h-auto xl:px-10 relative'>
                <div className='grid grid-cols-1 '>
                    <h2 className='text-white lg:text-2xl font-medium '>Our Services</h2>
                </div>
                <div>
                    <img src={RedVector} className="md:w-40 w-32 lg:w-48 absolute bottom-72  md:bottom-60 lg:bottom-40 -left-10" alt="" />
                    <img src={WhiteVector} className="md:w-40 w-32 lg:w-48 absolute z-0 2xl:-right-10 -right-20 -top-24" alt="" />
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 relative mt-10 xl:gap-10 lg:gap-7 gap-5">
                    {services?.map(item => {
                        console.log('url ------------', item.url)
                        return (
                            <Link to={item.url}>
                                <ServiceCard Image={item.image} Icon={item.icon} Title={item.title} Content={item.desc} />
                            </Link>
                        )
                    }
                    )}
                </div>
                <div className='mt-24'>
                    <h3 className='text-white lg:text-2xl font-medium '>More from Our Service</h3>
                    <div className='flex flex-wrap '>
                        {data.allContentfulServices.edges?.map(item => (
                            <Link to={`/Service/${item.node?.slug}`} className='bg-white text-xs md:text-sm lg:text-base grow md:p-3 p-2 m-1 rounded-md text-primary'>{item.node.title}</Link>
                        ))}

                    </div>
                </div>


            </div>

            <div className='pt-28 container'>
                <div className='grid grid-cols-1'>
                    <img src={WhiteDotsVector} className="w-20 lg:w-40" alt="" />

                    <MailSubscribeSection />

                    <div className='flex justify-end'>
                        <img src={RedDotsVector} className="w-20 lg:w-40" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection
export const BlueVector = WhiteVector