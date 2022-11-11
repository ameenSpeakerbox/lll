import { graphql } from 'gatsby'
import React from 'react'
import { BlueVectorImg } from '../Home/HeroSection'

const NewsTemplate = ({ data }) => {
    console.log(data)
    return (
        <main className='container py-7 '>
            <section className='grid'>
                <div>
                    <h3 className='text-secondary font-medium	'>{data?.createdDate}</h3>
                    <h1 className='text-primary lg:text-5xl text-2xl md:text-4xl font-bold lg:w-7/12'>{data?.title}</h1>
                    <p className='md:text-md lg:text-lg w-10/12 mt-5'>{data?.description?.description}</p>

                    <div className='w-11/12 flex flex-col mx-auto my-14 relative'>
                        <img src={BlueVectorImg} className={'absolute w-60 -top-24 -right-24 z-0'} alt="" />

                        <div className="z-10 bg-white">
                            <img src={data?.image?.file.url} alt="" className='lg:h-96 md:h-72 w-full  object-cover lg:p-4 p-2 md:rounded-3xl	rounded-xl' style={{ boxShadow: ' 0px 4.87093px 60.8866px rgba(10, 80, 159, 0.25)' }} />
                        </div>
                    </div>
                    <p className='text-lg'>{data?.secondDescription?.secondDescription}</p>

                </div>
            </section>
        </main>
    )
}

export default NewsTemplate
