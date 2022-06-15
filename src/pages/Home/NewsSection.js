import React from "react"
import vector from '../../Assets/images/Vector.png'
import vector1 from '../../Assets/images/Vector (1).png'
import dotwithcircle from '../../Assets/images/entypo_info-with-circle.svg'

import NewsComponent from "../../Components/NewsComponent/NewsComponent"
function NewsSection (){
return(
    <div className="container pt-20">
        
        <span 
            style={{position: "absolute",width:"3%",height:"6%",left:"10%",}} >
            <img  src={dotwithcircle}></img>
        </span>
        <div className="border-solid border-b-2 border-secondary" >
            <h1 className='text-primary font-bold text-4xl text-left mb-6  pl-12'>News And Information</h1>
        </div>
        
        
            <div ><NewsComponent/></div>
       
    </div>
)
}
export default NewsSection