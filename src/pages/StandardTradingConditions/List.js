import React from 'react'

const List = ({ title, points, otherContents }) => {
    return (
        <li className='font-bold'>{title}
            <ol className='lg:pl-7 md:pl-5 pl-3 font-normal'>
                {points?.map(item => <li>{item}</li>)}
            </ol>
            <div className='lg:pl-7 md:pl-5 pl-3 font-normal'>
                {otherContents?.map(item => <p>{item}</p>)}
            </div>
        </li>
    )
}

export default List