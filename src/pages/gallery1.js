
import React from 'react'
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby'
import Gallery from '../components/Gallery'


import styled from "styled-components"
const CustomBox = styled.div`

.intro:before{
	content: "Galleries";

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
  query gal1Query {
    allFile(filter: { relativeDirectory: { eq: "gallery1" } }) {
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
  const data = useStaticQuery(gal1Query)
  return (
	  <CustomBox>
    <Layout>
    
    <div className="outer intro">
      <div className="container">
    
      <h1>Twilightscapes Portfolio<br /><span style={{fontSize:'80%',}}>- the work of Todd Lambert</span></h1>
      
      <p>Todd has focused mostly on the western United States where his work represents 14 states so far. He has plans to head East over the next year and eventually cover the entire US.</p>
      </div>
      </div>
      
      <Gallery
        photos={data.allFile.edges}
      />
      
      
    </Layout>
    </CustomBox>
  )
}

export default Gal1Page
