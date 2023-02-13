import React from 'react'
import Layout from '../Components/Layout/Layout'
import GetAQoute from './GetAQoute/GetAQoute'

const GetQoute = () => {
    return (
        <Layout>
            <GetAQoute />
        </Layout>
    )
}
export function Head() {
    return <title>Get a Quote | EFS Logistics KSA</title>;
  }



export default GetQoute