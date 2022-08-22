import React from "react";
import { graphql, Link } from 'gatsby'

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

const NewsComponent = (props) => {
  console.log(props)
  return (
    <div>
      <div className="grid grid-cols-4 gap-12 mt-5 mb-8">
        {/* {props.data.allContentfulNewsAndInformation.edges?.map((item, idx,) => {

          return (
            <div className={idx + 1 == data.allContentfulNewsAndInformation.edges.length ? "pr-12" : "border-solid border-r-2 border-black pr-12"}>

              <p className=" font-normal	 text-xs lg:text-xs ">{data.createdDate}</p>
              <h2 className="text-primary font-normal text-2xl text-left">
                {item.title}
              </h2>

              <p className=" font-normal	 text-xs lg:text-sm mt-1 ">{data.description.description.slice(0, 200) + '...'}</p>
              <button >

                {item.cta}</button>
            </div>
          );
        })} */}

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
export const PageQuery = graphql`
{
  allContentfulNewsAndInformation {
    edges {
      node {
        cta
        id
        slug
        title
        image {
          file {
            url
          }
          description
        }
        description {
          description
        }
        createdDate(formatString: "Do MMMM yyyy")
      }
    }
  }
}

`