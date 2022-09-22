import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import * as styles from "./BlogRoll.module.sass";

import PreviewCompatibleImage from "./PreviewCompatibleImage";
import Button from "./Button";

const BlogRollTemplate = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Read our blog</h2>
        <p>Find out where and how to use Otty in the most effective way</p>
      </div>
      {props.blogPage ? (
        <div className={styles.blogRoll}>
          {posts && posts.map(({ node: post }) => <BlogItem post={post} />)}
        </div>
      ) : (
        <div className={styles.blogRoll}>
          {posts &&
            posts
              .filter(({ node: post }) => post.frontmatter.featuredpost)
              .map(({ node: post }) => <BlogItem post={post} />)}
        </div>
      )}
    </div>
  );
};

const BlogItem = ({ post }) => {
  return (
    <div className={styles.blogItemContainer} key={post.id}>
      <article
        className={` ${post.frontmatter.featuredpost ? "is-featured" : ""}`}
      >
        <header>
          {post?.frontmatter?.featuredimage && (
            <div className={styles.thumbnail}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                  width:
                    post.frontmatter.featuredimage.childImageSharp
                      .gatsbyImageData.width,
                  height:
                    post.frontmatter.featuredimage.childImageSharp
                      .gatsbyImageData.height,
                }}
              />
            </div>
          )}
          <h4 className="post-meta">
            <Link
              className="title has-text-primary is-size-4"
              to={post.fields.slug}
            >
              {post.frontmatter.title}
            </Link>
          </h4>
        </header>
        <p>{post.excerpt}</p>
        <Link to={post.fields.slug}>
          <Button ofType="primaryOutline">Keep reading...</Button>
        </Link>
      </article>
    </div>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function BlogRoll({ blogPage }) {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 672
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => (
        <BlogRollTemplate data={data} count={count} blogPage={blogPage} />
      )}
    />
  );
}
