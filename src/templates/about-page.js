import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// import FsLightbox from 'fslightbox-react';

import styled from "styled-components"
const CustomBox = styled.div`

.intro:before{
	content: "Articles";

position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:180%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}

`

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
//   const [toggler, setToggler] = useState(false);

  return (
    <section className="outer intro section" style={{paddingTop:'0',}}>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title has-text-weight-bold1">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              
              
              

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
	  <CustomBox>
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
    </CustomBox>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
