import React from 'react'
import group from '../../Assets/images/Group1.png'

function ImageComponent ({props}) {
    console.log(props,props.id)
    return(
        
          <div >
              <div className="card pb-10 "  style={{backgroundColor:"#F6F6F6"}}>
                  <div  className='border-solid border-b-8 border-primary'>
                  <img src={props.img} class="card-img-top w-full" alt="..."/>
                  </div>
                
                    <div className="card-body h-32">
                        <p className='text-primary font-bold text-xl card-text m-4'>{props.text}</p>
                       
                    </div>
                    <span style={{position:"absolute",}}><img height="50px" width="50px" src={group}/></span>
                </div>
            </div>


    )

}
export default ImageComponent