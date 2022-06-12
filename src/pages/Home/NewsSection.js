import React from "react"
import vector from '../../Assets/images/Vector.png'
import vector1 from '../../Assets/images/Vector (1).png'
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
        
        <div class="grid grid-cols-4 gap-12 mt-5 mb-8" >
            <div className='border-solid border-r-2 border-black pr-12'style={{backgroundColor:""}}>
                <p className=' font-semibold	 text-xs lg:text-sm '>25 March 2023</p>
                <h2 className='text-primary font-bold text-2xl text-left'>EFS Annual Meet 2023 to be held on 25th July 2023</h2>
                <p className=' font-semibold	 text-xs lg:text-sm '>Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi.
                     Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.</p>
            </div>

            <div className="border-solid border-r-2 border-black pr-12"style={{backgroundColor:""}}>
            <p className=' font-semibold	 text-xs lg:text-sm '>25 March 2023</p>
                <h2 className='text-primary font-bold text-2xl text-left'>EFS New Rates for 2023</h2>
                <p className=' font-semibold	 text-xs lg:text-sm '>Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. 
                    Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.</p>
            </div>
            <div className="border-solid border-r-2 border-black pr-12"style={{backgroundColor:""}}>
            <p className=' font-semibold	 text-xs lg:text-sm '>25 March 2023</p>
                <h2 className='text-primary font-bold text-2xl text-left'>Introducing Pet Relocation Services</h2>
                <p className=' font-semibold	 text-xs lg:text-sm '>Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi.
                     Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.</p>
            </div>
            <div className=" pr-12"style={{backgroundColor:""}}>
            <p className=' font-semibold	 text-xs lg:text-sm '>25 March 2023</p>
                <h2 className='text-primary font-bold text-2xl text-left'>New shipping rules for EU</h2>
                <p className=' font-semibold	 text-xs lg:text-sm '>Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi.
                     Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.</p>
            </div>
        </div>
    </div>
)
}
export default NewsSection