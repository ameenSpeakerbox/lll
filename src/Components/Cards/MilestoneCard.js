import React from 'react'

const MilestoneCard = ({ year, icon, text }) => {
    return (
        <div className={`flex `}>
            <h3 className='text-lg'>{year}</h3>
            <img src={icon} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default MilestoneCard