import React from "react"
import vector from '../../Assets/images/Vector.png'
import vector1 from '../../Assets/images/Vector (1).png'
import NewsComponent from "../../Components/NewsComponent/NewsComponent"
function NewsSection (){
return(
    <div className="container pt-20">
        
        <span 
            style={{position: "absolute",color:"white",width:"3%",height:"6%",left:"10%",borderRadius:"50%",background: "#064E95",}} >
            <img style={{position: "absolute",left:"15px",top:"12px"}} src={vector}></img>
        </span>
        <div className="border-solid border-b-2 border-secondary" >
            <h1 className='text-primary font-bold text-4xl text-left mb-6  pl-12'>News And Information</h1>
        </div>
        
        
            <div><NewsComponent/></div>
       
    </div>
)
}
export default NewsSection