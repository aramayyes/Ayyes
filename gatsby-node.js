exports.createPages = async ({ graphql, actions, reporter }) => {
  const templateComponent = require.resolve('./src/templates/work-details.js')

  const result = await graphql(`
    {
      allWorksJson {
        edges {
          node {
            slug
            externalLink
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(`Error while running GraphQL query to get works.`)
    return
  }

  const works = result.data.allWorksJson.edges
  works.forEach(({ node: { slug, externalLink } }) => {
    if (externalLink) {
      return
    }

    actions.createPage({
      path: `/${slug}`,
      component: templateComponent,
      context: { slug, screenshotsPath: `works/images/${slug}/screenshots` }
    })
  })
}
