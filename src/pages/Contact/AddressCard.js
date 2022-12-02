import React from 'react'

const AddressCard = ({ data }) => {
    return (
        <div className='text-primary'>
            <h3 className='text-secondary text-xl underline underline-offset-4	'>{data?.location}</h3>
            <p className='mb-5 w-56 mt-3'>{data?.addres}</p>
            <a href={data?.mapAddress} className="text-primary underline font-bold " target="_blank" rel="noopener noreferrer">Get Directions</a>
            <div className="grid mt-3">

                <a className='font-bold' href={`tel:+${data?.mobile?.replaceAll(' ', '')}`}>Mobile: {data?.mobile}</a>
                <a className='font-bold' href="mailto:info@efslogistics.net">Email: {data?.email}</a>
            </div>
        </div>
    )
}

export default AddressCard