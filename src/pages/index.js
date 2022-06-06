import React from 'react'
import Layout from '../Components/Layout/Layout'
import AboutSection from './Home/AboutSection'
import HeroSection from './Home/HeroSection'
import ServiceSection from './Home/Service'


const index = () => {
  return (
    <Layout>

      <HeroSection />
      <AboutSection />
      <ServiceSection />

    </Layout>
  )
}

export default index