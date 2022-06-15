import React from 'react'
import FooterLinksSection from './FooterLinksSection'
import Logo from '../../Assets/images/Logo.png'
import yearText from '../../Assets/images/yearText.png'


const Footer = () => {
  const sitemap = [
    { title: 'HOME', url: '/' },
    { title: 'ABOUT EFS', url: '/' },
    { title: 'SERVICES', url: '/' },
    { title: 'CAREERS', url: '/' },
    { title: 'EMPLOYEE PORTAL', url: '/' },
  ]

  const quickStart = [
    { title: 'GET A QUOTE', url: '/' },
    { title: 'TRACK SHIPMENT', url: '/' },
    { title: 'RAISE A COMPLAINT', url: '/' },
    { title: 'CONTACT US', url: '/' },
    { title: 'REQUEST A CALL', url: '/' },
  ]
  const services = [
    { title: 'AIR FREIGHT', url: '/' },
    { title: 'SEA FREIGHT', url: '/' },
    { title: 'GLOBAL LCL', url: '/' },
    { title: 'CROSS BORDER TRANSPORTATION', url: '/' },
    { title: 'RELOCATION', url: '/' },
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

      <div className='grid lg:grid-cols-3 gap-5 mt-10'>
        <div className='col-span-2 flex flex-col items-center justify-center text-primary text-sm font-medium'>
          <div className='flex justify-between w-96'>
            <p className='mx-2 '>PRIVACY POLICY</p>
            <p className='mx-2'>BRAND GUIDELINES</p>
          </div>
          <div className='flex justify-evenly mt-5 w-full'>
            <p className='mx-2'>DISCLAIMER</p>
            <p className='mx-2'>TERMS OF USE</p>
            <p className='mx-2'>STANDARD TRADING AGREEMENT</p>
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