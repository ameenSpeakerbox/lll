import React from 'react'
import Layout from '../Components/Layout/Layout'
import WhastappIcon from '../Components/Whatsapp/WhastappIcon'
import AboutSection from './Home/AboutSection'
import HeroSection from './Home/HeroSection'
import NewsSection from './Home/NewsSection'
import ServiceSection from './Home/Service'
import ThirdSection from './Home/ThirdSection'
import '../styles/global.css'
import { Head } from "gatsby"



const index = () => {
  return (
    <>
    
    <Layout>
    <Head>
      <title>EFS Logistics | Your Trusted Logistic Partner in KSA</title>
      <link rel="icon" type="image/png" href="/assets/icons/favicon.png" />

    </Head>
        <HeroSection />
        <AboutSection />
        <ThirdSection />
        <NewsSection />
        <ServiceSection />

        <WhastappIcon />
      </Layout></>
  )
}

export default index