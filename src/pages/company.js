import React from 'react'
import Layout from '../Components/Layout/Layout'
import FirstSection from './Company/FirstSection'
import ManagementSection from './Company/ManagementSection'
import OurJourneySection from './Company/OurJourneySection'
import SeconSection from './Company/SeconSection'

const company = () => {
  return (
    <Layout>
      <FirstSection />
      <SeconSection/>
      <OurJourneySection />
      <ManagementSection />
    </Layout>
  )
}

export default company