import React from 'react'
import styled from "styled-components"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
// import Contact from '../components/Contact'
// import { FaTimesCircle } from 'react-icons/fa'

const IntroBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

`


export const Intro = ({
  image,
  title,
  heading,
  subheading,
  subsubheading,
  
}) => (

<IntroBox>




<div id="hero"
      className="full-width-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center center`,
        width: '100%',
        backgroundSize: 'cover',
        height: '100vh',
        paddingTop: '95px',
        position: 'relative',
      }}
    >
    
    
 

    
    

    
    <ScrollAnimation animateOut="fadeOut" initiallyVisible={true} animateOnce={true} animatePreScroll={true} style={{position:'absolute',  textAlign: 'center', bottom:'14%', fontSize: '80%', color: '#fff', zIndex: '0',}}>
        <div className="scrolldown txtshadow-header">SCROLL <IoIosArrowDropdownCircle /> MORE</div></ScrollAnimation>
        
<ScrollAnimation animateIn="bounceInRight"  delay={100} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'absolute', left:'10%', bottom:'25%', zIndex:'1',}}>
<label style={{display:'flex', justifyContent:'center',}} htmlFor="modal-toggle">
<div className="special txtshadow" style={{padding:'.5rem 2rem', backgroundColor:'#DB2600', color:'#fff', borderRadius:'6px', cursor:'pointer',}}>Get Started</div>
</label>
</ScrollAnimation>
    
    
    
 <ScrollAnimation animateIn="bounceInDown"  delay={100} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h1
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
           position: 'relative',
            border: '0px solid red',
            float: 'none',
          }}
        >
          {heading}
        </h1>
        </ScrollAnimation>
        
        
        
         <ScrollAnimation animateIn="bounceInLeft"  delay={100} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '2rem',
           position: 'relative',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {subheading}
        </h2>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="bounceInUp"  delay={100} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h3
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '2rem',
           position: 'relative',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {subsubheading}
        </h3>
        </ScrollAnimation>

</div>



</IntroBox>    

)





Intro.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  subsubheading: PropTypes.string,
}



const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
	  
	  
	  

      <Intro
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        subsubheading={frontmatter.subsubheading}
      />

  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Intro


export const pageQuery = graphql`
  query Intro {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heading
        subheading
        subsubheading

		
      }
    }
  }
`
