import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Contact from '../components/Contact-inc'
// import Image from '../components/Image';
// import Intro from '../components/intro-home'
//  import Gallery1 from '../components/Gallery1'
import Layout from '../components/Layout'
import Install from '../components/Install'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { FaAccessibleIcon, FaOdnoklassniki, FaBlind } from 'react-icons/fa'

// import PopMedical from '../components/PopMedical'
import PopSemi from '../components/PopSemi'
import styled from "styled-components"

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

.fullscreen-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
//   border:20px solid red !important;
}

.fullscreen-bg__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (min-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    height: 300%;
    top: -100%;
  }
}

@media (max-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    width: 300%;
    left: -100%;
  }
}

@media (max-width: 767px) {
  .fullscreen-bg {
    background: url('../img/videoframe.jpg') center center / cover no-repeat;
  }

  .fullscreen-bg__video {
    display: none;
  }
}

@media (min-width: 58rem) {

  .full-width-image h1{font-size:500% !important;}
  .full-width-image h2{font-size:300% !important;}
  .full-width-image h3{font-size:200% !important;}
  
  #hero h1{font-size:350% !important; line-height:95%; margin-bottom:1rem;}
  #hero h3{font-size:380% !important; color:red !important;}
  .special{font-size:200% !important;}
}



`





export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  subsubheading,
  
  image2,
  i2Heading,
  i2Subheading,
  i2Subsubheading,
  i2Subsubheading2,
  
  image3,
  i3Heading,
 i3Subheading,
  i3Subsubheading,
  i3Subsubheading2,
  



  
}) => (
	
	<>
     
    
	<CustomBox>
	
  <div className="outer intro" style={{}}>
  

  
    <div id="hero"
      className="full-width-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `bottom right`,
        width: '100%',
        backgroundSize: 'cover',
        height: '100vh',
        paddingTop: '125px',
        position: 'relative',
//         overflowX: 'scroll',
      }}
    >
    
    
 

    
    

    
    <ScrollAnimation animateOut="fadeOut" initiallyVisible={true} animateOnce={true} animatePreScroll={true} style={{position:'absolute',  textAlign: 'center', bottom:'14%', fontSize: '80%', color: '#fff', zIndex: '0',}}>
        <div className="scrolldown txtshadow-header">SCROLL <IoIosArrowDropdownCircle /> MORE</div>
   </ScrollAnimation>
        
        
        
        
<ScrollAnimation animateIn="bounceInRight"  delay={100} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{display:'none', position:'absolute', left:'10%', bottom:'25%', zIndex:'1',}}>
<label style={{display:'flex', justifyContent:'center',}} htmlFor="modal-toggle">
<div className="special txtshadow" style={{padding:'.5rem 2rem', backgroundColor:'#DB2600', color:'#fff', borderRadius:'6px', cursor:'pointer',}}>Get Started</div>
</label>
</ScrollAnimation>
    

    
 <ScrollAnimation animateIn="fadeIn"  delay={1300} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h1
          className="normal txtshadow-header mobile-txt"
          style={{
/*
            fontSize: '3.5rem',
*/
            color: '#fff',
           position: 'relative',
//            top: '100px',
//         left: '5%',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
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
//            top: '100px',
//         left: '5%',
//            backgroundColor: '#ff0000',
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
//            top: '100px',
//         left: '5%',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {subsubheading}
        </h3>
        </ScrollAnimation>
        
        
        
        
        
       
    </div>
    
    
    

<ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
<img src="" alt="Placeholder" width="220" height="220" style={{float: 'right', margin:'0 0 1rem 1rem',}} />
<h2>Main Spotlight</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>
</div>
</ScrollAnimation>

<ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
<img src="" alt="Placeholder" width="220" height="220" style={{float: 'left', margin:'0 1rem 1rem 0',}} />
<h2>Supporting Spotlight</h2>
<p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>

<p> It has survived not only five centuries, but also the leap into electronic typesetting.</p>
</div>
</div>
</ScrollAnimation>

<ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
<img src="" alt="Placeholder" width="220" height="220" style={{float: 'right', margin:'0 0 1rem 1rem',}} />
<h2>The Ad2 Difference</h2>
<p>With our best-in-class capabilities, high quality work and superior support, we can market your company in the most cost effective way.</p>
<p>Let Ad2 assist you with bringing your vision to a reality.</p>
</div>
</div>
</ScrollAnimation>





<h2 style={{textAlign: 'center', margin: '1rem 0 2rem 0',}}>Some of our clients:</h2>
    
        <div
      className="full-width-image margin-top-0"
      style={{display: 'block',
	      position: 'relative',
        backgroundImage: `url(${
          !!image2.childImageSharp ? image2.childImageSharp.fluid.src : image2
        })`,
        backgroundPosition: `bottom center`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        height:'100vh',
        paddingTop: '55px',
        overflowX: 'scroll',
      }}
    >
    

     <ScrollAnimation animateIn="bounceInDown" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '3rem',
           position: 'relative',
           top: '20%',
//         right: '5%',
//         left: '5%',
        margin: '0 auto',
        padding: '0 1rem',
            backgroundImage: 'linear-gradient(#372d26 15.89%, #160e0e 80.13%)',
            border: '0px solid red',
            borderRadius: '8px',
            float: 'none',
//             width: '90vw',
            textAlign: 'center',
            
          }}
        >
          {i2Heading} 
        </h2>
        </ScrollAnimation>
        
        
        
        
        
         <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '1.4rem',
           position: 'relative',
//            top: '60%',
//         right: '5%',
//         left: '15%',
        margin: '1rem  auto 0 auto',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
//             width: '100vw',
            
          }}
        >
          {i2Subheading}. We create custom plans for your processes. 
        </h2>
        </ScrollAnimation>
        
        
        
         <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '1.4rem',
           position: 'relative',
//            top: '60%',
//         right: '5%',
//         left: '15%',
        margin: '1rem auto',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
//             width: '100vw',
            
          }}
        >
          {i2Subsubheading} that are tailored to your business. 
        </h2>
        </ScrollAnimation>
        
        
        
         <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '1.6rem',
           position: 'relative',
//            top: '60%',
//         right: '5%',
//         left: '15%',
        margin: '2rem auto 0 auto',
//            backgroundColor: '#ff0000',
            textAlign: 'center',
            border: '0px solid red',
//             width: '100vw',
            
          }}
        >
          {i2Subsubheading2}
        </h2>
        </ScrollAnimation>

        
        <PopSemi />

    </div>

    
    
    
    
    
    
    

    
    <div
      className="full-width-image margin-top-0"
      style={{display: 'block',
	      position: 'relative',
        backgroundImage: `url(${
          !!image3.childImageSharp ? image3.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `bottom center`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        height:'100vh',
        paddingTop: '55px',
        overflowX: 'scroll',
      }}
    >
    <ScrollAnimation animateIn="bounceInDown" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '3rem',
           position: 'relative',
//            top: '100px',
//         left: '5%',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {i3Heading}
        </h2>
        </ScrollAnimation>
        
        
        <ScrollAnimation animateIn="FadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '1.6rem',
           position: 'relative',
		   margin: '1rem 0 0 0',
            textAlign: 'left',
            border: '0px solid red',
          }}><FaAccessibleIcon />{i3Subheading} Wheel Chairs</h2>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="FadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '1.6rem',
           position: 'relative',
		   margin: '1rem 0 0 0',
            textAlign: 'left',
            border: '0px solid red',
          }}><FaOdnoklassniki />{i3Subsubheading} Good Helmets</h2>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="FadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '1.6rem',
           position: 'relative',
		   margin: '1rem 0 0 0',
            textAlign: 'left',
            border: '0px solid red',
          }}><FaBlind />{i3Subsubheading2} Canes - keeping the blind upright</h2>
        </ScrollAnimation>
        
        

        
       <PopSemi />
       
       
    </div>
    
    
    
    
    
    
    <Contact />




    
       
    
  </div>
  </CustomBox>
  <Install />
</>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  subsubheading: PropTypes.string,
  
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  i2Heading: PropTypes.string,
  i2Subheading: PropTypes.string,
  i2Subsubheading: PropTypes.string,
  i2Subsubheading2: PropTypes.string,

  image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  i3Heading: PropTypes.string,
  i3Subheading: PropTypes.string,
  i3Subsubheading: PropTypes.string,
  i3Subsubheading2: PropTypes.string,
}



const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
	  
	  
	  
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        subsubheading={frontmatter.subsubheading}

        image2={frontmatter.image2}
        i2Heading={frontmatter.i2Heading}
        i2Subheading={frontmatter.i2Subheading}
        i2Subsubheading={frontmatter.i2Subsubheading}
        i2Subsubheading2={frontmatter.i2Subsubheading2}

        image3={frontmatter.image3}
       i3Heading={frontmatter.i3Heading}
        i3Subheading={frontmatter.i3Subheading}
        i3Subsubheading={frontmatter.i3Subsubheading}
        i3Subsubheading2={frontmatter.i3Subsubheading2}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
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
        image2 {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
		i2Heading
		i2Subheading
		i2Subsubheading
		i2Subsubheading2
		
		 image3 {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
		i3Heading
		i3Subheading
		i3Subsubheading
		i3Subsubheading2
		
      }
    }
  }
`
