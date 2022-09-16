import React from 'react'

const AddressCard = ({ data }) => {
    return (
        <div className='text-primary'>
            <h3 className='text-secondary text-xl underline underline-offset-4	'>{data?.location}</h3>
            <p className='mb-5 w-56 mt-3'>{data?.addres}</p>
            <div className="grid">

                <a className='font-bold' href={`tel:+${data?.mobile?.replaceAll(' ', '')}`}>Mobile: {data?.mobile}</a>
                <a className='font-bold' href="mailto:info@efslogistics.net">Email: {data?.email}</a>
            </div>
        </div>
    )
}

export default AddressCard