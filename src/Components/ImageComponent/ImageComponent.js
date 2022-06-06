import React from 'react'
import Rectangle from '../../Assets/images/Rectangle 12.png'
function ImageComponent ({props}) {
    console.log(props,props.id)
    return(
        
          <div>
              <div className="card" >
                  <div  className='border-b-black-800'>
                  <img src={props.img} class="card-img-top" alt="..."/>
                  </div>
                
                    <div className="card-body">
                        <p className='text-primary font-bold  card-text'>{props.text}</p>
                       
                    </div>
                </div>
              
          </div>
        

    )
    
}
export default ImageComponent