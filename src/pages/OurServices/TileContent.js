import React from 'react';
function TileComponent({props}){
    console.log(props)
    return(
<div class="flex flex-row shadow-md	rounded-lg">
  <div class="basis-1/2"><span ><img src={props.image}/></span></div>
  <div class="basis-1/2">
        <div class="flex flex-col ">
                <div>
                        <h3 className='text-primary font-extrabold text-l py-2'>{props.title}</h3>
                </div>
                <div>
                    <p className='text-left font-normal text-xs lg:text-sm '>{props.desc}</p>
                </div>
        </div>
  </div>
  
</div>
    )
    

}export default TileComponent