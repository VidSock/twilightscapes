
import React from 'react'
import Layout from '../components/Layout'

import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../components/Gallery'
import ScrollAnimation from 'react-animate-on-scroll'
import GalleryMenu from '../components/GalleryMenu'
// import PopSemi from '../components/PopSemi'
import { FiZoomIn } from 'react-icons/fi'

import styled from "styled-components"
const CustomBox = styled.div`

.intro:before{
	content: "Crazy Geology";

position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:400%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}

@media (hover: hover) {
.gatsby-image-wrapper{transform: scale(1.25);}
}
.gatsby-image-wrapper{transform: scale(1.25);}
/*
	.gatsby-image-wrapper:after{
	content: "+ click to zoom";
	position:absolute; bottom:10px; right:10px;
	color:#fff;
	}
*/

`


const CrazyGeology = graphql`
  query CrazyGeology {
    allFile(filter: { relativeDirectory: { eq: "crazy-geology" } }) {
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

const Gal1Page = () => {
  const data = useStaticQuery(CrazyGeology)
  return (
	  <CustomBox>
    <Layout>
    


      
      
      <GalleryMenu />
  
  <ScrollAnimation animateIn="fadeOut" initiallyVisible={true} delay={0} animateOnce={true} animatePreScroll={false} style={{display:'flex',alignItems:'center', justifyContent:'center',}}>
  <h4 style={{color:'#fff', fontSize:'100%', textAlign:'center', display:'flex', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', position:'absolute', bottom:'50px', zIndex:'1',}}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</h4>
  </ScrollAnimation>

      
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

export default Gal1Page
