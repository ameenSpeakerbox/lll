// import React from 'react'
// import { Link } from 'gatsby'

// class BlogList extends React.component {
//   render() {
//     const { currentPage, numPages } = this.props.pageContext
//     const isFirst = currentPage === 1
//     const isLast = currentPage === numPages
//     const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
//     const nextPage = (currentPage + 1).toString()
//     return (
//        /* your code to display a list of posts */
//       (!isFirst && (
//         <Link to={prevPage} rel="prev">
//           ← Previous Page
//         </Link>
//       ))
//       (!isLast && (
//         <Link to={nextPage} rel="next">
//           Next Page →
//         </Link>
//       ))
//     )
//   }
// }

// export default BlogList
// export const pageQuery = graphql`
//   query ($skip: Int!, $limit: Int!) {
//     allContentfulCaseStudies(
//       sort: { fields: [frontmatter___date], order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//             title
//             typeOfWork
//             featuredImage {
//             fixed {
//                 src
//             }
//             }
//             images {
//             fixed {
//                 src
//             }
//             }
//             content {
//             raw
//             }
                                
//         }
//       }
//     }
//   }
// `;
