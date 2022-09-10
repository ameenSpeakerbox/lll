import React from 'react'
import Layout from '../Components/Layout/Layout'
import CareerPage from './Career/Career'

const Career = () => {
    return (
        <Layout>

            <CareerPage />
            <div className='h-5 w-full' style={{ background: '#B9D5F2' }} />
        </Layout>
    )
}

export default Career