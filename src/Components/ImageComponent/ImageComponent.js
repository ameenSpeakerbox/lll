import React from 'react'
import Vector from '../../Assets/images/Group 1.svg'

function ImageComponent({ props }) {
    console.log(props, props.id)
    return (

        <div className='relative'>

            <div className='border-b-8 border-blue-800'>
                <img src={props.img} className="w-full h-72 object-center object-cover	" alt="..." />
            </div>

            <div className="p-4 h-40" style={{ background: '#F6F6F6' }}>
                <p className='text-primary font-bold  card-text'>{props.text}</p>

                <div >
                    <img src={Vector} className="absolute right-0 bottom-0" alt="" />
                </div>
            </div>
        </div>


    )

}
export default ImageComponent