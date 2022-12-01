import React from 'react'
import Icon from '../../Assets/images/Logo.png'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const WhastappIcon = () => {
    return (
        <div className='fixed bottom-1 right-1 p-7  rounded-full' >
            <FloatingWhatsApp accountName={'EFS Logistics'} avatar={Icon}  />

            
        </div>
    )
}

export default WhastappIcon
