import React from 'react'
import Layout from '../Components/Layout/Layout'
import Contact from './Contact/Contact'

const contact = () => {
    return (
        <Layout>
            <Contact />
        </Layout>
    )
}
export function Head() {
    return <title>Contact Us | EFS Logistics KSA</title>;
  }
export default contact