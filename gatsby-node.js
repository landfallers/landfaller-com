const path = require(`path`);
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const query = await graphql(`
    query {
      magazines: allFile(
        filter: {
          sourceInstanceName: { eq: "magazines" }
          internal: { mediaType: { eq: "text/mdx" } }
        }
        sort: { fields: childrenMdx___frontmatter___vol, order: DESC }
      ) {
        edges {
          node {
            childMdx {
              id
              slug
            }
          }
        }
      }
      blogs: allFile(
        filter: {
          sourceInstanceName: { eq: "blogs" }
          internal: { mediaType: { eq: "text/mdx" } }
        }
        sort: { fields: childrenMdx___frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            childMdx {
              id
              slug
            }
          }
        }
      }
      category: allMdx {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
      tags: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  if (query.errors) {
    reporter.panicOnBuild(`graphqlでerrorが発生しました`);
    return;
  }
  //landfall本誌の各ページ
  query.data.magazines.edges.forEach(({ node }) => {
    createPage({
      path: `magazines/${node.childMdx.slug}`,
      component: path.resolve(`./src/templates/magazinePost.js`),
      context: {
        id: node.childMdx.id,
      },
    });
  });
  //blogの各ページ
  query.data.blogs.edges.forEach(({ node }) => {
    createPage({
      path: `blogs/${node.childMdx.slug}`,
      component: path.resolve(`./src/templates/blogPost.js`),
      context: {
        id: node.childMdx.id,
      },
    });
  });
  const magazinePostsPerPage = 20;
  const magazinePosts = query.data.magazines.edges.length;
  const magazinePages = Math.ceil(magazinePosts / magazinePostsPerPage);
  Array.from({ length: magazinePages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/magazines/` : `/magazines/${i + 1}`,
      component: path.resolve("./src/templates/magazines.js"),
      context: {
        skip: magazinePostsPerPage * i,
        limit: magazinePostsPerPage,
        total: magazinePosts,
        currentPage: i + 1,
        isFirst: i + 1 == 1,
        isLast: i + 1 == magazinePages,
      },
    });
  });

  const blogPostsPerPage = 20;
  const blogPosts = query.data.blogs.edges.length;
  const blogPages = Math.ceil(blogPosts / blogPostsPerPage);
  Array.from({ length: blogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs/` : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/blogs.js"),
      context: {
        skip: blogPostsPerPage * i,
        limit: blogPostsPerPage,
        total: blogPosts,
        currentPage: i + 1,
        isFirst: i + 1 == 1,
        isLast: i + 1 == blogPages,
      },
    });
  });
  query.data.category.group.map(({ fieldValue, totalCount }) => {
    const categoryPostsPerPage = 2;
    const categoryPosts = totalCount;
    const categoryPages = Math.ceil(categoryPosts / categoryPostsPerPage);
    Array.from({ length: categoryPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/category/${fieldValue}/`
            : `/category/${fieldValue}/${i + 1}/`,
        component: path.resolve("./src/templates/category.js"),
        context: {
          category: fieldValue,
          total: totalCount,
          skip: categoryPostsPerPage * i,
          limit: categoryPostsPerPage,
          currentPage: i + 1,
          isFirst: i + 1 == 1,
          isLast: i + 1 == categoryPages,
        },
      });
    });
  });
  query.data.tags.group.map(({ fieldValue, totalCount }) => {
    const tagsPostsPerPage = 3;
    const tagsPosts = totalCount;
    const tagsPages = Math.ceil(tagsPosts / tagsPostsPerPage);
    Array.from({ length: tagsPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0 ? `/tags/${fieldValue}/` : `/tags/${fieldValue}/${i + 1}/`,
        component: path.resolve("./src/templates/tags.js"),
        context: {
          tag: fieldValue,
          total: totalCount,
          skip: tagsPostsPerPage * i,
          limit: tagsPostsPerPage,
          currentPage: i + 1,
          isFirst: i + 1 == 1,
          isLast: i + 1 == tagsPages,
        },
      });
    });
  });
};
