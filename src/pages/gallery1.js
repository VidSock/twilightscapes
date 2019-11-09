
import Layout from '../components/Layout';

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'




import Gallery from '../components/Gallery'


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
    <Layout>
    <section className="outer intro section" style={{paddingTop:'0',}}>
      <div className="container">
    
      <h1>Browse Our Work:</h1>
      
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
      </div>
      </section>
      
      <Gallery
        photos={data.allFile.edges}
      />
      
      
    </Layout>
  )
}

export default Gal1Page
