import React from 'react'
import Layout from '../Components/Layout/Layout'
import FirstSection from './Company/FirstSection'
import SeconSection from './Company/SeconSection'

const company = () => {
  return (
    <Layout>
      <FirstSection />
      <SeconSection/>
    </Layout>
  )
}

export default company