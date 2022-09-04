import React from 'react';
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


function OurServices(props) {
    const services = [
        { image: PlaneImg, icon: PlaneIcon, title: 'Air Freight', desc: 'Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.' },
        { image: ShipImg, icon: ShipIcon, title: 'Sea Freight', desc: 'Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.' },
        { image: TruckImg, icon: TruckIcon, title: 'Land Freight', desc: 'Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.' },
    ]
    return (
<div>
<section className=' bg-white py-20  '>
            <div className='container h-auto xl:px-10 relative'>
                <div className='grid grid-cols-1 '>
                    <h2 className='text-white text-2xl font-medium '>Our Services</h2>
                </div>
                <div>
                    <img src={RedVector} className="w-48 absolute -bottom-10 -left-10" alt="" />
                    <img src={WhiteVector} className="w-48 absolute z-0 2xl:-right-10 lg:-right-0" alt="" />
                </div>
                <div className="grid md:grid-cols-3 relative mt-10 xl:gap-10 lg:gap-7">
                    {services.map(item => (
                        <ServiceCard Image={item.image} Icon={item.icon} Title={item.title} Content={item.desc} />
                    ))}
                </div>


            </div>

            
        </section>
        <section className=' bg-primary py-20  '>
            <div className='pt-28 container'>
                <div className='grid grid-cols-1'>
                    <img src={WhiteDotsVector} className="w-40" alt="" />

                    <MailSubscribeSection />

                    <div className='flex justify-end'>
                        <img src={RedDotsVector} className="w-40" alt="" />
                    </div>
                </div>
            </div>
        </section>
</div>
        
    );
}

export default OurServices;
export const RedVectorImg = RedVector