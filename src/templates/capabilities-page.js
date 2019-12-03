import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ScrollAnimation from 'react-animate-on-scroll';
import Install from '../components/Install'
import styled from 'styled-components'

const CustomBox = styled.div`

.intro:before{
	content: "Gear";

position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:380%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}

`

export const CapabilitiesPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content


  return (
	 
    <section className="outer intro section" style={{paddingTop:'0',}}>
    
    <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={1000}>
      <div className="container">
              <h2 className="h2">
                {title}
              </h2>
              <PageContent className="content" content={content} />
       </div>
       </ScrollAnimation>
       
       <ScrollAnimation animateIn="bounceInUp" animateOnce={true}>
       <div className="container">
              <h2 className="">
                Todd&apos;s Gear
              </h2>
              
<p>I’ve shot many a digital camera and other equipment over the years but I’ve settled on the set of tools below.</p>


<h3>Cameras:</h3>
<ul><li>Canon 5D III</li>
<li>Sony A7R II</li>
<li>Sony A7S II</li></ul>

<h3>Glass:</h3>

<ul><li>8-15 L Fisheye</li>
<li>17 ƒ4 TS-E</li>
<li>24 TS-E II</li>
<li>24 ƒ1.4 L II</li>
<li>35 ƒ1.4 L</li>
<li>16-35mm ƒ2.8 L Mk II</li>
<li>85 ƒ1.2 L Mk II</li>
<li>24-105mm ƒ4 L</li>
<li>135 ƒ2 L</li>
<li>Nikon 14-24</li></ul>




<h3>Other Glass:</h3>

<ul><li>EF Extender 1.4 II</li>
<li>82mm B+W MRC CPL Filter</li>
<li>77mm B+W MRC CPL Filter</li>
<li>72mm B+W MRC CPL Filter</li></ul>

<h3>Accessories:</h3>

<ul><li>Kenko Ext Tubes</li>
<li>Sennheiser 300 Mic</li>
<li>Poverty Wizards – RF-602s (3 sets)</li>
<li>Cokin Filter System</li>
<li>Several sets of Eneloops</li>
<li>Various other tools, gadgets and doo-dads</li></ul>


<h3>Lighting:</h3>

<ul><li>(3) 580EX II Speedlights</li>
<li>Sekonic L-308S Light Meter</li>
<li>Light stands, umbrellas, softboxes, and other diffusers</li>
<li>Some home made stuff (flashlights, lasers, neon, etc..)</li></ul>



<h3>Support:</h3>

<ul><li>Gitzo GT5562GTS</li>
<li>Gitzo 1554T</li>
<li>Gitzo 3531s</li>
<li>Acratech GV2 Ballhead</li>
<li>Acratech GPS-SS Ballhead</li>
<li>Acratech Pano Head</li>
<li>Acratech Long Lens Head</li>
<li>Actratech plates</li>
<li>Cotton Carrier System</li></ul>

<h3>Bags:</h3>

<ul><li>Domke F2</li>
<li>Domke F5xb</li>
<li>Domke Gripper Strap</li>
<li>Domke Backpack Strap</li>
<li>ApeCase Backpack</li>
<li>Booq Python XL and Vyper XL2</li>
<li>Original Lowepro Backpack</li>
<li>Lowepro AW100</li>
<li>Pelican</li></ul>



       </div>
       </ScrollAnimation>
       <Install/>
    </section>
    
  )
}

CapabilitiesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CapabilitiesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
	  <CustomBox>
    <Layout>
      <CapabilitiesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
   </CustomBox>
  )
}

CapabilitiesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CapabilitiesPage

export const capabilitiesPageQuery = graphql`
  query CapabilitiesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
