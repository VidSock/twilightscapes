
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
	content: "Gallery 8";

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
  query gal8Query {
    allFile(filter: { relativeDirectory: { eq: "gallery8" } }) {
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

const Gal8Page = () => {
  const data = useStaticQuery(gal1Query)
  return (
	  <CustomBox>
    <Layout>


    <div className="outer intro" style={{backgroundColor:'#222', borderTop:'1px solid #000',}}>
      <div className="container1 content" style={{padding:'30px 0 10px 0',}}>

     <GalleryMenu />
      </div>
      </div>

      
      <ScrollAnimation animateIn="fadeIn" initiallyVisible={false} delay={1300} animateOnce={true} animatePreScroll={true}>
      <div className="container" style={{background:'',}}>
      <Gallery
        photos={data.allFile.edges}
      />
      </div>
      </ScrollAnimation>
      
      
      
      <ScrollAnimation animateIn="fadeIn" initiallyVisible={false} animateOnce={false} animatePreScroll={false}>
      <div className="outer intro" style={{backgroundColor:'#222', borderTop:'1px solid #000',}}>
      <div className="container1" style={{padding:'10px 0 10px 0', borderBottom:'1px solid #000',}}>
      
      <GalleryMenu />
      </div>
      </div>
      </ScrollAnimation>

    </Layout>
    </CustomBox>
  )
}

export default Gal8Page
