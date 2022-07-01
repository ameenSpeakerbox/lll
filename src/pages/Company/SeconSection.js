import React from 'react'

function SeconSection(){
return(
    <section className='bg-primary py-20 flex justify-center'>
            <div class="grid grid-cols-3 gap-16">

                    <div>
                        <div  className='text-white font-normal text-7xl mt-14'>2500+</div>
                        <div><span className='text-white font-normal text-base '>Projects Executed</span></div>
                    </div>
                    
                    <div class="grid grid-rows-2 gap-12 ">
                        <div>
                        <div className=' text-white font-normal text-7xl ' >150+</div>
                        <div><span className='text-white font-normal text-base'>Team Members</span></div>
                        </div>
                        <div>
                        <div className=' text-white font-normal text-7xl ' >25+</div>   
                        <div><span className='text-white font-normal text-base'>Years of Experience</span></div> 
                        </div>
                        
                    </div>
                    <div>
                    <div className=' text-white font-normal text-7xl mt-14'>1700+</div>
                    <div><span className='text-white font-normal text-base '>Happy Clients</span></div> 
                    </div>
                    
            </div>
    </section>
)

}
export default SeconSection;