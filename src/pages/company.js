import React from 'react'
import Layout from '../Components/Layout/Layout'
import FirstSection from './Company/FirstSection'
import ManagementSection from './Company/ManagementSection'
import OurJourneySection from './Company/OurJourneySection'

const company = () => {
  return (
    <Layout>
      <FirstSection />
      <OurJourneySection />
      <ManagementSection />
    </Layout>
  )
}

export default company