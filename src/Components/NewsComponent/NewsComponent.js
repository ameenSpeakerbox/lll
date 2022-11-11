import React from "react";
import { graphql, Link, useStaticQuery } from 'gatsby'


const NewsComponent = () => {
  const data = useStaticQuery(graphql`
query
  {
    allContentfulNewsAndInformation(sort: {order: ASC, fields: createdDate}) {
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
  
  `)

  return (
    <div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-12 mt-5 mb-8">
        {data?.allContentfulNewsAndInformation.edges?.map((item, idx,) => {
          console.log(item)
          return (
            <div className={idx + 1 == data?.allContentfulNewsAndInformation.edges.length ? "pr-12 sm:border-b-2 border-solid  border-black lg:border-b-0 " : "border-solid  border-black pr-12 lg:border-r-2 border-b-2  lg:border-b-0"}>

              <p className=" font-normal	 text-xs lg:text-xs ">{item.node.createdDate}</p>
              <Link to={`/News/${item.node.slug}`} className="text-primary font-normal text-2xl text-left">
                {item.node.title}
              </Link>

              <p className=" font-normal	 text-xs lg:text-sm mt-1 ">{item.node.description.description.slice(0, 200) + '...'}</p>

              <div className="flex justify-start py-5">
                <Link to={`/News/${item.node.slug}`} className="text-primary text-sm underline underline-offset-4	text-left">{item.node.cta}</Link>
              </div>

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
