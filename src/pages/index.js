import React from 'react'
import Layout from '../Components/Layout/Layout'
import AboutSection from './Home/AboutSection'
import HeroSection from './Home/HeroSection'
import NewsSection from './Home/NewsSection'
import ServiceSection from './Home/Service'
import ThirdSection from './Home/ThirdSection'


const index = () => {
  return (
    <Layout>

      <HeroSection />
      <AboutSection />
      <ThirdSection/>
      <NewsSection/>
      <ServiceSection />

    </Layout>
  )
}

export default index