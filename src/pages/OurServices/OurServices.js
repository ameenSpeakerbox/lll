import React from 'react';
import RedVector from '../../Assets/images/Ornament 12.png'
import BlueVector from '../../Assets/images/Ornament 11.png'
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
import TileComponent from './TileContent';
import Tile1 from '../../Assets/images/Rectangle 28.png'
import Tile2 from '../../Assets/images/Rectangle 29.png'
import Tile3 from '../../Assets/images/Rectangle 30.png'
import Tile4 from '../../Assets/images/Rectangle 31 a.png'
import Tile5 from '../../Assets/images/Rectangle 32.png'
import Tile6 from '../../Assets/images/Rectangle 33.png'
import Tile7 from '../../Assets/images/Rectangle 34.png'
import Tile8 from '../../Assets/images/Rectangle 35.png'
import Tile9 from '../../Assets/images/Rectangle 36.png'
import Tile10 from '../../Assets/images/Rectangle 37.png'
import { graphql, useStaticQuery } from 'gatsby';


function OurServices() {
//     const data = useStaticQuery(graphql`
//     query{
// allContentfulServices {
//     edges {
//       node {
//         buttonText
//         youtubeLink
//         title
//              {
//           description
//         }
//         landscapeImage {
//           file {
//             url
//           }
//         }
//         landscapeImageDescription {
//           raw
//         }
//         portraitImage {
//           file {
//             url
//           }
//         }
//         portraitImageDescription {
//           raw
//         }
//         youtubeThumbnailImage {
//           file {
//             url
//           }
//         }
//       }
//     }
//   }
// }`)
    const services = [
        { image: PlaneImg, icon: PlaneIcon, title: 'Air Freight', desc: 'Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.' },
        { image: ShipImg, icon: ShipIcon, title: 'Sea Freight', desc: 'Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.' },
        { image: TruckImg, icon: TruckIcon, title: 'Land Freight', desc: 'Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.' },
    ]
    const tiles = [
        { image: Tile1, title: 'Customs Clearance', desc: 'Licensed in house customs clearance solutions covering all major ports in Saudi Arabia. ' },

        { image: Tile2, title: 'TIR', desc: 'EFS offers a cost effective cross border transportation solution being an IRU and Saudi customs approved TIR operator.' },

        { image: Tile3, title: 'Export/Import Consolidation', desc: 'Offering LCL service from all major ports in Saudi Arabia and all major ports worldwide. ' },
        { image: Tile4, title: 'Automotive Relocation', desc: 'We have all the experience needed in transporting motor vehicles on a global scale.' },
        { image: Tile5, title: 'Expo & Events', desc: 'Licensed in house customs clearance solutions covering all major ports in Saudi Arabia. ' },
        { image: Tile6, title: 'Warehousing', desc: 'State of the art warehousing facility with fully equipped fire fighting system and 24 hour security service.' },

        { image: Tile7, title: 'Project Cargo', desc: 'We assure the safe delivery of entire project cargoes on a turnkey basis, from multiple vendors and suppliers.' },

        { image: Tile8, title: 'Packing & Crating', desc: 'Experienced in-house team of packers and carpentry personnel to execute any kind of packing and crating work.' },
        { image: Tile9, title: 'Relocation Services', desc: 'Proud member of IAM Movers Association, we handle Door to Door, Air, Sea and Land relocations.' },
        { image: Tile10, title: 'Pilgrims Baggage Handling', desc: 'We have a dedicated team to collect excess baggage from pilgrims from hotels and deliver them to home.' }

    ]
    return (
        <div>
            <section className=' bg-white py-20  '>
                <div className='container h-auto xl:px-10 relative'>
                    <div className='grid grid-cols-1 '>
                        <h2 className='text-primary text-4xl font-bold '>Our Services</h2>
                        <div>
                            <p>
                                We provide the best one stop solution for all our customer needs so
                                that our customers never need to depend on multiple service providers for their requirements.
                            </p>
                        </div>

                    </div>
                    <div>
                        <img src={RedVector} className="w-48 absolute -bottom-10 -left-10" alt="" />
                        <img src={BlueVector} className="w-48 absolute z-0 2xl:-right-10 lg:-right-0" alt="" />
                    </div>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 relative mt-10 xl:gap-10 gap-7">
                        {services.map(item => (
                            <ServiceCard Image={item.image} Icon={item.icon} Title={item.title} Content={item.desc} />
                        ))}
                    </div>


                </div>


            </section>
            <section className='py-20'>
                <div className='container '>
                    <div class="flex flex-row bg-pink place-content-center">
                        <div className="grid md:grid-cols-2 bg-pink gap-5 p-4">
                            {/* {data.map(item => (
                                <TileComponent data={item.node} />
                            ))} */}
                        </div>
                        {/* <div class="flex flex-col bg-pink gap-5 p-4">
                        {tiles.map(item => (
                            <TileComponent props={item}/>
                        ))}
                        </div>
                   
                    
                        <div class="flex flex-col bg-pink gap-5 p-4">
                        {tiles1.map(item => (
                            <TileComponent props={item}/>
                        ))}
                            
                        </div> */}


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
