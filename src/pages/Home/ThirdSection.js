import React from 'react'
import Rectangle from '../../Assets/images/Rectangle 12.png'
import Rectangle1 from '../../Assets/images/Rectangle 13.png'
import Rectangle2 from '../../Assets/images/Rectangle 14.png'
import ImageComponent from '../../Components/ImageComponent/ImageComponent'




function ThirdSection() {
    const array = [
        {
            id: 1,
            img: Rectangle,
            text: `Our proven track-record to “deliver” no matter how big or small your shipment.`
        },
        {
            id: 2,
            img: Rectangle1,
            text: `EFS’s global network of dedicated professionals which results in a truly comprehensive service.`
        },
        {
            id: 3,
            img: Rectangle2,
            text: `Encouragement of open communication with clients so as to fully understand individual requirements.`
        }
    ]
    return (
        <main className='container' >
            <h1 className='text-primary font-normal text-xl lg:text-3xl text-center mb-8'>What makes EFS standout ?</h1>

            <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-4 lg:gap-12 ">
                {array.map((item) => (
                    <div className='content-center' >
                        <ImageComponent data={item} /></div>
                )

                )}

            </div>



        </main>
    )
}
export default ThirdSection