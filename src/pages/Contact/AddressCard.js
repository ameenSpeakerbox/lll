import React from 'react'

const AddressCard = ({ location,
    addres,
    mobile,
    email }) => {
    return (
        <div className='text-primary'>
            <h3 className='text-secondary text-xl underline underline-offset-4	'>{location}</h3>
            <p className='mb-5 w-56 mt-3'>{addres}</p>
            <div className="grid">

                <a className='font-bold' href={`tel:+${mobile.replaceAll(' ','')}`}>Mobile: {mobile}</a>
                <a className='font-bold' href="mailto:info@efslogistics.net">Email: {email}</a>
            </div>
        </div>
    )
}

export default AddressCard