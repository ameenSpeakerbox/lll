import React from 'react'
import Rectangle from '../../Assets/images/Rectangle 12.png'
import Rectangle1 from '../../Assets/images/Rectangle 13.png'
import Rectangle2 from '../../Assets/images/Rectangle 14.png'
import ImageComponent from '../../Components/ImageComponent/ImageComponent'

let array_of_object = [
    {
        id: 1,
        img: Rectangle,
        text: "Our proven track-record to “deliver” no matter how big or small your shipment."
    },
    {
        id: 2,
        img: Rectangle1,
        text: "EFS’s global network of dedicated professionals which results in a truly comprehensive service."
    },
    {
        id: 3,
        img: Rectangle2,
        text: "Encouragement of open communication with clients so as to fully understand individual requirements."
    }
]


function ThirdSection(){
    return(
        <main className='container' >
                <h1 className='text-primary font-normal text-3xl text-center mb-8'>What makes EFS standout ?</h1>
                
                <div class="grid grid-cols-3 gap-12 ">
                    {array_of_object.map((item)=>{
                        return(
                            <div className='content-center' >
                                <ImageComponent props={item}/></div>
                        )
                            
                    })}
                   
                 
            </div>



        </main>
    )
}
export default ThirdSection