import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ fileName, alt, imgClass, ...props }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid {
            originalName
          }
          gatsbyImageData(width: 1206, quality: 100, placeholder: BLURRED)
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
      imgClassName={imgClass}
      loading="eager"
      imgStyle={{ objectFit: "contain" }}
      {...props}
    />
  );
};

export default Image;
