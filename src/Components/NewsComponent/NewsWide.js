import { Link } from 'gatsby'
import React from 'react'
import Img from '../../Assets/images/Rectangle 14.png'

const NewsWide = ({ data }) => {
    return (
        <Link to={`/News/${data.slug}`} className='grid grid-cols-4 gap-7' >
            <div className='col-span-1'>
                <img src={data.image.file.url} alt="" />
            </div>
            <div className='col-span-3'>
                <h6 className='text-xs '>{data.createdDate}</h6>
                <h2 className='text-primary text-2xl'>{data.title}</h2>
                <p className='text-sm '>{data.description.description}</p>
            </div>
        </Link>
    )
}

export default NewsWide