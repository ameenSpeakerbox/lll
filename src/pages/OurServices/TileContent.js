import { Link } from 'gatsby';
import React from 'react';

function TileComponent({ data }) {
    console.log(data)
    return (
        <Link to='/Service' class="flex flex-row 	rounded-2xl p-2" style={{ boxShadow: '0px 2.92353px 36.5441px rgb(10 80 159 / 25%)' }}>
            <div class="basis-1/2"><span >
                <img className='w-11/12 ' src={data?.portraitImage.file.url} />
                </span></div>
            <div class="basis-1/2">
                <div class="flex flex-col ">
                    <div>
                        <h3 className='text-primary font-extrabold text-sm md:text-lg py-1 lg:py-2'>{data?.title}</h3>
                    </div>
                    <div>
                        <p className='text-left font-normal text-xs lg:text-sm'>{data?.description.description}</p>
                    </div>
                </div>
            </div>

        </Link>
    )


} export default TileComponent