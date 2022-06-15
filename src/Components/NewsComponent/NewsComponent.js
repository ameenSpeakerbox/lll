import React from "react"

let array_of_obj=[
    {
        id:1,
        date:'25 March 2023',
        head:"EFS Annual Meet 2023 to be held on 25th July 2023",
        para:'Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.'
    },
    {
        id:2,
        date:'25 March 2023',
        head:"EFS New Rates for 2023",
        para:'Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.'
    },
    {
        id:3,
        date:'25 March 2023',
        head:"Introducing Pet Relocation Services",
        para:'Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.'
    },
    {
        id:4,
        date:'25 March 2023',
        head:"New shipping rules for EU",
        para:'Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.'
    },
    
]

function NewsComponent(){
    return(
        <div >
            <div class="grid grid-cols-4 gap-12 mt-5 mb-8" >

                {
                    array_of_obj.map((item)=>{
                        
                            <div className='border-solid border-r-2 border-black pr-12'>
                                {console.log('item',item)}
                                    <p className=' font-semibold	 text-xs lg:text-sm '>{item.date}</p>
                                    <h2 className='text-primary font-bold text-2xl text-left'>{item.head}</h2>
                                    <p className=' font-semibold	 text-xs lg:text-sm '>{item.para}</p>
                            </div>

                    })
                }
            

            
            {/* <div className=" pr-12"style={{backgroundColor:""}}>
            <p className=' font-semibold	 text-xs lg:text-sm '>25 March 2023</p>
                <h2 className='text-primary font-bold text-2xl text-left'></h2>
                <p className=' font-semibold	 text-xs lg:text-sm '>Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi.
                     Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.</p>
            </div> */}

            </div>
             

        </div>
    )
}
export default NewsComponent