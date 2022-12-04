import React from 'react'
import Icon from '../../Assets/images/Logo.png'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const WhastappIcon = () => {
    return (
        <>
            <FloatingWhatsApp accountName={'EFS Logistics'} avatar={Icon} phoneNumber={'+966549121252'}  />
        </>
    )
}

export default WhastappIcon
