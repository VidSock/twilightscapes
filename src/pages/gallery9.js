
import React from 'react'
import Layout from '../components/Layout';
// import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../components/Gallery'
import ScrollAnimation from 'react-animate-on-scroll';
import GalleryMenu from '../components/GalleryMenu'

import styled from "styled-components"
const CustomBox = styled.div`

.intro:before{
	content: "Gallery 9";

position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:480%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}

@media (hover: hover) {
.gatsby-image-wrapper{transform: scale(1.25);}
}
/*
	.gatsby-image-wrapper:after{
	content: "+ click to zoom";
	position:absolute; bottom:10px; right:10px;
	color:#fff;
	}
*/

`


const gal1Query = graphql`
  query gal9Query {
    allFile(filter: { relativeDirectory: { eq: "gallery9" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`

const Gal9Page = () => {
  const data = useStaticQuery(gal1Query)
  return (
	  <CustomBox>
    <Layout>


<GalleryMenu />

      
      <ScrollAnimation animateIn="fadeIn" initiallyVisible={false} delay={700} animateOnce={true} animatePreScroll={true}>
      <div className="container" style={{background:'#111',}}>
      <Gallery
        photos={data.allFile.edges}
      />
      </div>
      </ScrollAnimation>
      
<GalleryMenu />

    </Layout>
    </CustomBox>
  )
}

export default Gal9Page
