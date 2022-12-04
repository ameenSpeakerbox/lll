import React from 'react'
import FooterLinksSection from './FooterLinksSection'
import Logo from '../../Assets/images/Logo.png'
import yearText from '../../Assets/images/yearText.png'
import { Link } from 'gatsby'
import { Icons } from '../../pages/Contact/Contact'


const Footer = () => {
  const sitemap = [
    { title: 'HOME', url: '/' },
    { title: 'ABOUT EFS', url: '/company' },
    { title: 'SERVICES', url: '/OurServices' },
    { title: 'CAREERS', url: '/Career' },
    { title: 'EMPLOYEE PORTAL', url: '/Maintenance' },
  ]

  const quickStart = [
    { title: 'GET A QUOTE', url: '/get-a-qoute' },
    { title: 'TRACK SHIPMENT', url: '/Maintenance' },
    { title: 'RAISE A COMPLAINT', url: '/Maintenance' },
    { title: 'CONTACT US', url: '/contact' },
    { title: 'REQUEST A CALL', url: '/Maintenance' },
  ]
  const services = [
    { title: 'AIR FREIGHT', url: '/AirFreight' },
    { title: 'SEA FREIGHT', url: '/SeaFreight' },
    // { title: 'GLOBAL LCL', url: '/' },
    { title: 'LAND TRANSPORTATION', url: '/LandTransportation' },
    { title: 'RELOCATION', url: '/Service/relocation-services' },
  ]
  const others = [
    { title: 'PACKING AND CRATING', url: '/Maintenance' },
    { title: 'HEAVY LIFT OPERATIONS', url: '/Maintenance' },
    { title: 'WAREHOUSING', url: '/Maintenance' },
    { title: 'CUSTOM CLEARANCE', url: '/Maintenance' },
  ]


  return (
    <footer className='container py-20'>
      <div className='grid lg:grid-cols-5 gap-5  '>

        <FooterLinksSection heading={'SITEMAP'} headingColor={'#C70101'} list={sitemap} />
        <FooterLinksSection heading={'QUICK START'} headingColor={'#C70101'} list={quickStart} />
        <FooterLinksSection heading={'SERVICES'} headingColor={'#044E96'} list={services} />
        <FooterLinksSection heading={''} list={others} />

        <div>
          <h5 className='text-primary '>Follow us on</h5>
          <div className='flex items-start mt-3'>
            {Icons.map(item => (
              <a href={item.url} target={'_blank'} className='bg-primary p-1 rounded  mr-2'>
                <img src={item.icon} className={'w-5'} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
        <div className='col-span-2 flex flex-col md:items-center justify-start text-primary text-sm font-medium'>
          <div className='flex flex-col md:flex-row gap-2 md:justify-between mb-5 md:w-10/12'>
            <Link to='/PrivacyPolicy' className=' '>PRIVACY POLICY</Link>
            <Link to='/standardTradingConditions' className=''>STANDARD TRADING AGREEMENT</Link>
          </div>
          <div className='flex flex-col md:flex-row gap-2 md:w-10/12'>
            {/* <p className='md:mx-2'>BRAND GUIDELINES</p>
            <p className='md:mx-2'>DISCLAIMER</p>
            <p className='md:mx-2'>TERMS OF USE</p> */}
            <p className='text-primary'>All business is transacted under the Standard Trading Conditions, copy available for download from our website and will be made available upon request. Cargo is not insured by EFS unless specifically instructed in writing</p>
          </div>

        </div>

        <div className='text-sm  font-medium'>
          <div className='flex'>
            <img src={Logo} className={'h-12 sm:h-14 lg:h-12'} alt="" />
            <div className='w-px h-auto bg-slate-300	mx-5 ' />
            <img src={yearText} className={'h-14 sm:h-16 lg:h-14'} alt="" />
          </div>
          <p className='text-primary '>Copyright ©1996- 2022</p>
          <p className='text-primary '>  EFS Company Ltd. All rights reserved. </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer