import React from 'react'

const ServiceCard = ({ Image, Icon, Title, Content }) => {
    return (
        <div className='w-full h-full flex flex-col bg-white items-center p-2 rounded-3xl relative h-full' style={{ boxShadow: '0px 2.92353px 36.5441px rgb(10 80 159 / 25%)' }}>

            {/* image */}
            <div>
                <img src={Image} alt="" />
            </div>
            {/* image */}

            <div className='flex flex-col items-center  bottom-0 px-3 py-5 -mt-40'>

            {/* icon */}
                <div className='bg-white rounded-full shadow-xl flex justify-center items-center w-16 h-16 p-4'>
                    <img src={Icon} alt="" />
                </div>
                {/* icon */}

                <div>
                    <h3 className='text-primary font-extrabold text-xl py-2'>{Title}</h3>
                </div>

                <div>
                    <p className='text-center font-semibold	 text-xs lg:text-sm '>{Content}</p>
                </div>
            </div>

        </div>
    )
}

export default ServiceCard