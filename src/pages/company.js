import React from 'react'
import Layout from '../Components/Layout/Layout'
import FirstSection from './Company/FirstSection'
import ManagementSection from './Company/ManagementSection'
import MissionAndVision from './Company/MissionAndVision'
import OurJourneySection from './Company/OurJourneySection'
import SeconSection from './Company/SeconSection'

const company = () => {
  return (
    <Layout>
      <FirstSection />
      <MissionAndVision />
      <SeconSection/>
      <OurJourneySection />
      <ManagementSection />
    </Layout>
  )
}

export function Head() {
  return (
    <title>About EFS Logistics | 25 Years of Excellence</title>
  )
}


export default company