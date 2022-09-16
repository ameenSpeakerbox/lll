import React from 'react'
import group from '../../Assets/images/Group1.png'

function ImageComponent({ data }) {
    console.log(data, data.id)
    return (

        <div >
            <div className="card pb-10 relative" style={{ backgroundColor: "#F6F6F6" }}>
                <div className='border-solid border-b-8 border-primary'>
                    <img src={data.img} class="card-img-top w-full" alt="..." />
                </div>

                <div className="card-body h-24">
                    <p className='text-primary font-semibold  lg:text-lg card-text m-4'>{data.text}</p>

                </div>
                <span ><img className='h-10 absolute right-0 bottom-0' src={group} /></span>
            </div>
        </div>


    )

}
export default ImageComponent
export const themeImg = group