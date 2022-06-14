import React from 'react'

const FooterLinksSection = ({heading,list, headingColor }) => {
    return (
        <div className='grid '>
            <h3 className='font-bold ' style={{ color: headingColor }}>{heading}</h3>
            
            {list.map(item => (
                <p className='mt-2 text-sm font-medium w-36 hover:text-gray-500 transition duration-500 cursor-pointer '>
                    {item.title}
                </p>
            ))}
        </div>
    )
}

export default FooterLinksSection