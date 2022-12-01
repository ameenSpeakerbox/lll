import React from 'react'
import FooterLinksSection from './FooterLinksSection'
import Logo from '../../Assets/images/Logo.png'
import yearText from '../../Assets/images/yearText.png'
import { Link } from 'gatsby'


const Footer = () => {
  const sitemap = [
    { title: 'HOME', url: '/' },
    { title: 'ABOUT EFS', url: '/company' },
    { title: 'SERVICES', url: '/OurServices' },
    { title: 'CAREERS', url: '/Career' },
    { title: 'EMPLOYEE PORTAL', url: '/' },
  ]

  const quickStart = [
    { title: 'GET A QUOTE', url: '/get-a-qoute' },
    { title: 'TRACK SHIPMENT', url: '/' },
    { title: 'RAISE A COMPLAINT', url: '/' },
    { title: 'CONTACT US', url: '/contact' },
    { title: 'REQUEST A CALL', url: '/' },
  ]
  const services = [
    { title: 'AIR FREIGHT', url: '/AirFreight' },
    { title: 'SEA FREIGHT', url: '/SeaFreight' },
    // { title: 'GLOBAL LCL', url: '/' },
    { title: 'LAND TRANSPORTATION', url: '/LandTransportation' },
    { title: 'RELOCATION', url: '/Service/relocation-services' },
  ]
  const others = [
    { title: 'PACKING AND CRATING', url: '/' },
    { title: 'HEAVY LIFT OPERATIONS', url: '/' },
    { title: 'WAREHOUSING', url: '/' },
    { title: 'CUSTOM CLEARANCE', url: '/' },
  ]


  return (
    <footer className='container py-20'>
      <div className='grid lg:grid-cols-4 gap-5  '>

        <FooterLinksSection heading={'SITEMAP'} headingColor={'#C70101'} list={sitemap} />
        <FooterLinksSection heading={'QUICK START'} headingColor={'#C70101'} list={quickStart} />
        <FooterLinksSection heading={'SERVICES'} headingColor={'#044E96'} list={services} />
        <FooterLinksSection heading={''} list={others} />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
        <div className='col-span-2 flex flex-col items-center justify-center text-primary text-sm font-medium'>
          <div className='flex flex-col md:flex-row gap-2 md:justify-evenly mb-5 w-full'>
            <Link to='/PrivacyPolicy' className='md:mx-2 '>PRIVACY POLICY</Link>
            <p className='md:mx-2'>BRAND GUIDELINES</p>
          </div>
          <div className='flex flex-col md:flex-row gap-2 md:justify-evenly  w-full'>
            <p className='md:mx-2'>DISCLAIMER</p>
            <p className='md:mx-2'>TERMS OF USE</p>
            <Link to='/standardTradingConditions' className='md:mx-2'>STANDARD TRADING AGREEMENT</Link>
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