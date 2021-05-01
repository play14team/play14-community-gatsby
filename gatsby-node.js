const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      events: allStrapiEvent {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.events.nodes.forEach(evt => {
    createPage({
      path: `/events/${evt.slug}`,
      component: path.resolve(`src/templates/event.js`),
      context: {
        slug: evt.slug,
      },
    })
  })
}
