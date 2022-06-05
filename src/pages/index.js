import React from 'react'
import Layout from '../Components/Layout/Layout'
import AboutSection from './Home/AboutSection'
import HeroSection from './Home/HeroSection'
import ThirdSection from './Home/ThirdSection'


const index = () => {
  return (
    <Layout>

      <HeroSection />
      <AboutSection />
      <ThirdSection/>
    </Layout>
  )
}

export default index