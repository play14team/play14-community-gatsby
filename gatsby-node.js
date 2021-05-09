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
      games: allStrapiGame {
        nodes {
          slug
        }
      }
      players: allStrapiPlayer {
        nodes {
          slug
        }
      }
      posts: allStrapiBlog {
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

  result.data.games.nodes.forEach(game => {
    createPage({
      path: `/games/${game.slug}`,
      component: path.resolve(`src/templates/game.js`),
      context: {
        slug: game.slug,
      },
    })
  })

  result.data.players.nodes.forEach(p => {
    createPage({
      path: `/players/${p.slug}`,
      component: path.resolve(`src/templates/player.js`),
      context: {
        slug: p.slug,
      },
    })
  })

  result.data.posts.nodes.forEach(p => {
    createPage({
      path: `/blog/${p.slug}`,
      component: path.resolve(`src/templates/blog.js`),
      context: {
        slug: p.slug,
      },
    })
  })

}

exports.onCreateNode = async ({ node, actions, store, cache, createNodeId, }) => {
  const { createNode } = actions
  
  let multipleImages = node.images

  if (multipleImages) {
    if (multipleImages.length > 0) {
      multipleImages.forEach(el => console.log(el))
      const images = await Promise.all(
        multipleImages.map(el =>
          createRemoteFileNode({
            url: `${process.env.GATSBY_API_URL}/${el.url}`,
            parentNodeId: node.id,
            store,
            cache,
            createNode,
            createNodeId,
          })
        )
      )
   
     multipleImages.forEach((image, i) => {
        image.localFile___NODE = images[i].id
      })
    }
  }
}