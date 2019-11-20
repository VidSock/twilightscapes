
import React from 'react'
import Layout from '../../components/Layout';
// import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../../components/Gallery'
import ScrollAnimation from 'react-animate-on-scroll'
import GalleryMenu from '../../components/GalleryMenu'
import { FiZoomIn } from 'react-icons/fi'
import PopInstaller from '../../components/PopInstaller'

import styled from "styled-components"
const CustomBox = styled.div`

.intro:before{
	content: "The Vault";

position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:480%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
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


const vaultQuery = graphql`
  query vaultQuery {
    allFile(filter: { relativeDirectory: { eq: "gallery6" } }) {
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

const VaultPage = () => {
  const data = useStaticQuery(vaultQuery)
  return (
	  <CustomBox>
    <Layout>


<span className="has-app"><GalleryMenu /></span>


<ScrollAnimation animateIn="fadeOut" initiallyVisible={true} delay={0} animateOnce={true} animatePreScroll={false} style={{display:'flex',alignItems:'center', justifyContent:'center',}}>
  <h4 className="has-app" style={{color:'#fff', fontSize:'100%', textAlign:'center', display:'flex', backgroundColor:'#222', padding:'0px 10px', borderRadius:'10px', border:'1px solid #999', position:'absolute', bottom:'50px', zIndex:'1', opacity:'.9',}}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'3px', left:'-4px',}} />Click To Zoom</h4>
  </ScrollAnimation>
  

      <div className="container no-app" style={{background:'#111', textAlign:'center',}}>
<h3>You need to install our FREE web app to view this</h3>
      </div>
      
      <div className="container no-app" style={{padding:'0 3%',}}>
      <PopInstaller />
      <h3>Galleries below</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
	  </div>
      
      <ScrollAnimation animateIn="fadeIn" initiallyVisible={false} delay={700} animateOnce={true} animatePreScroll={true}>
      <div className="container has-app" style={{background:'#111',}}>
      <Gallery
        photos={data.allFile.edges}
      />
      </div>
      </ScrollAnimation>
      
      
<span className="has-app"><GalleryMenu /></span>

    </Layout>
    </CustomBox>
  )
}

export default VaultPage
