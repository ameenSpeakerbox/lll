import React from "react";
import NewsAndInformation from "../../pages/InnerPages/NewsAndInformation";
import { Link } from 'gatsby'
let array_of_obj = [
  {
    id: 1,
    date: "25 March 2023",
    head: "EFS Annual Meet 2023 to be held on 25th July 2023",
    para: "Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.",
  },
  {
    id: 2,
    date: "25 March 2023",
    head: "EFS New Rates for 2023",
    para: "Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.",
  },
  {
    id: 3,
    date: "25 March 2023",
    head: "Introducing Pet Relocation Services",
    para: "Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.",
  },
  {
    id: 4,
    date: "25 March 2023",
    head: "New shipping rules for EU",
    para: "Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.",
  },
];

function NewsComponent() {
  // alert('hfhdh')
  return (
    <div>
      <div className="grid grid-cols-4 gap-12 mt-5 mb-8">
        {array_of_obj.map((item, idx, ) => {
          
          return (
            <div className={idx + 1 == array_of_obj.length ? "pr-12":"border-solid border-r-2 border-black pr-12"}>
              
              <p className=" font-normal	 text-xs lg:text-xs ">{item.date}</p>
              <h2 className="text-primary font-normal text-2xl text-left">
                {item.head}
              </h2>

              <p className=" font-normal	 text-xs lg:text-sm mt-1 ">{item.para}</p>
              <button >
              {/* <Link to='/info'>
                                    <NewsAndInformation/>
                                </Link> */}
                read more</button>
            </div>
          );
        })}

        {/* <div className=" pr-12"style={{backgroundColor:""}}>
            <p className=' font-semibold	 text-xs lg:text-sm '>25 March 2023</p>
                <h2 className='text-primary font-bold text-2xl text-left'></h2>
                <p className=' font-semibold	 text-xs lg:text-sm '>Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi.
                     Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.</p>
            </div> */}
      </div>
    </div>
  );
}
export default NewsComponent;