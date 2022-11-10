import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ fileName, alt, imgClass, ...props }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1206, quality: 100) {
            originalName
          }
          gatsbyImageData
        }
      }
    }
  `);

  const image = allImageSharp.nodes.find(
    (n) => n.fluid.originalName === fileName
  ).gatsbyImageData;

  return (
    <GatsbyImage
      image={image}
      alt={alt}
      className={imgClass}
      loading="eager"
      imgStyle={{ objectFit: "contain" }}
      {...props}
    />
  );
};

export default Image;
