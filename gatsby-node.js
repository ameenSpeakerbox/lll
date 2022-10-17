const fs = require("fs-extra")
const path = require("path")

exports.onPostBuild = () => {
  console.log("Copying locales")
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  )
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const Service = path.resolve("./src/template/Service.js");
  const News = path.resolve("./src/template/news.js");
  const response = await graphql(`
    query {
      allContentfulServices{
        edges{
            node{
            slug
            }
          }
        }
        
    }
  `)
  const Newsresponse = await graphql(`
  query{
  allContentfulNewsAndInformation {
    edges {
      node { 
        slug
      }
    }
  }
}
  `)


  const news = Newsresponse.data.allContentfulNewsAndInformation.edges
  news.forEach(edge => {
    // const prev = index === 0 ? false : posts[index - 1].node
    //   const next = index === posts.length - 1 ? false : posts[index + 1].node
    createPage({
      path: `/News/${edge.node.slug}`,
      component: News,
      context: {
        slug: edge.node.slug,
      },
    });
  })
  const posts = response.data.allContentfulServices.edges
  posts.forEach(edge => {
    // const prev = index === 0 ? false : posts[index - 1].node
    //   const next = index === posts.length - 1 ? false : posts[index + 1].node
    createPage({
      path: `/Service/${edge.node.slug}`,
      component: Service,
      context: {
        slug: edge.node.slug,
      },
    });
  })
}