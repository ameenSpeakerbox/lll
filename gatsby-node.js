const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const caseStudies = path.resolve("./src/templates/caseStudies.js");
  const response = await graphql(`
    query {
      allContentfulCaseStudies{
        edges{
            node{
            slug
            }
          }
        }

        
    }
  `)

  
const posts = response.data.allContentfulCaseStudies.edges
    posts.forEach(edge => {
    // const prev = index === 0 ? false : posts[index - 1].node
    //   const next = index === posts.length - 1 ? false : posts[index + 1].node
    createPage({
      path: `/caseStudies/${edge.node.slug}`,
      component: caseStudies,
      context: {
        slug: edge.node.slug,
        // prev: index === 0 ? null : posts[index - 1].node,
        // next: index === (posts.length - 1) ? null : posts[index + 1].node,
        
      },
    });
  })
}
// 
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const template = path.resolve("./src/templates/caseStudies.js");
//   const response = await graphql(`
//     query {
//       allContentfulCaseStudies{
//         edges{
//             node{
//             slug
//             }
//           }
//         }
//     }
//   `)

  
// const posts = response.data.allContentfulCaseStudies.edges
//     posts.forEach(({node}, index) => {
//     // const prev = index === 0 ? false : posts[index - 1].node
//     //   const next = index === posts.length - 1 ? false : posts[index + 1].node
//     createPage({
      
//       component: template,
//       context: {
//         slug: node.slug,
//         prev: index === 0 ? null : posts[index - 1].node,
//         next: index === (posts.length - 1) ? null : posts[index + 1].node,
        
//       },
//     });
//   })

// };

// // exports.onCreateWebpackConfig = ({ actions }) => {
// //   actions.setWebpackConfig({
// //     node: {
// //       fs: 'empty'
// //     }
// //   })
// // }
const fs = require("fs-extra")

exports.onPostBuild = () => {
  console.log("Copying locales")
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  )
}