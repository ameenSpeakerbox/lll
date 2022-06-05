import React from 'react'
import Layout from '../Components/Layout/Layout'
import AboutSection from './Home/AboutSection'
import HeroSection from './Home/HeroSection'


const index = () => {
  return (
    <Layout>

      <HeroSection />
      <AboutSection />
    </Layout>
  )
}

export default index