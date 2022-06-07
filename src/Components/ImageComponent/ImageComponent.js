import React from 'react'
import Rectangle from '../../Assets/images/Rectangle 12.png'

function ImageComponent ({props}) {
    console.log(props,props.id)
    return(
        
          <div>
              <div className="card bg-stone-200 pb-10" >
                  <div  className='border-solid border-b-8 border-primary'>
                  <img src={props.img} class="card-img-top w-full" alt="..."/>
                  </div>
                
                    <div className="card-body ">
                        <p className='text-primary font-bold text-xl card-text m-4'>{props.text}</p>
                       
                    </div>

                </div>
            </div>
        </div>


    )

}
export default ImageComponent