import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Contact from '../components/Contact-inc'
import Image from '../components/Image';
// import Intro from '../components/intro-home'
//  import Gallery1 from '../components/Gallery1'
import Layout from '../components/Layout'
import Install from '../components/Install'
import { Link } from 'gatsby'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { FaAccessibleIcon, FaRegAddressCard, FaOdnoklassniki, FaBlind } from 'react-icons/fa'
import { GoGear, GoTelescope } from 'react-icons/go'

// import PopMedical from '../components/PopMedical'
import PopSemi from '../components/PopSemi'
import PopNewsletter from '../components/PopNewsletter'
import styled from "styled-components"

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

.intro img{border-radius:6px !important;}

.intro:before{
	content: "A Pioneer In Night Photography";

position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:180%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}

/*
.boom{
 	  background: -webkit-gradient(radial, 40% 90%, 10, 50% 50%, 90, from(rgba(0,28,78, 1)), to(rgba(31,169,244,1)) );
 	  
background:linear-gradient(to bottom, #cfc09f 22%,#634f2c 24%, #cfc09f 26%, #cfc09f 27%,#ffecb3 40%,#3a2c0f 78%); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: 
	}
*/
	
/*
	h3 {
    background: linear-gradient(to bottom, #fff 50%,yellow 40%, #a0c3cf 96%, #a0bdcf 27%,#ff0000 40%,white 100%); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
    position: relative;
	text-transform: uppercase;	
}
*/

.hit-the-floor {
  color: #fff;
  font-weight: bold;
  font-family: Helvetica;
  text-shadow: 
    0 1px 0 #ccc, 
    0 2px 0 #c9c9c9, 
    0 3px 0 #bbb, 
    0 4px 0 #b9b9b9, 
    0 5px 0 #aaa, 
    0 6px 1px rgba(0,0,0,.1), 
    0 0 5px rgba(0,0,0,.1), 
    0 1px 3px rgba(0,0,0,.3), 
    0 3px 5px rgba(0,0,0,.2), 
    0 5px 10px rgba(0,0,0,.25), 
    0 10px 10px rgba(0,0,0,.2), 
    0 20px 20px rgba(0,0,0,.15);
}




.fullscreen-bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;
}

.fullscreen-bg__video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    -webkit-transform: translate(-50%, -50%);
       -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
	    transform: translate(-50%, -50%);
}

@media (max-width: 767px) {
    .fullscreen-bg {
        background: url('http://dev2.slicejack.com/fullscreen-video-demo/img/videoframe.jpg') center center / cover no-repeat;
    }

    .fullscreen-bg__video {
        display: none;
    }
}





@media (min-width: 58rem) {

  .full-width-image h1{font-size:500% !important;}
  .full-width-image h2{font-size:300% !important;}
  .full-width-image h3{font-size:200% !important;}
  
  #hero h1{font-size:650% !important; line-height:95%; margin-bottom:1rem;}
  #hero h3{font-size:880% !important;}
  
  #hero .news-content h3{font-size:inherit !important;}
//   .special{font-size:200% !important;}
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
	
  <div className="outer intro">
  

  
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
		paddingTop:'20px',
        position: 'relative',
//         overflowX: 'scroll',
      }}
    >
    

    
    
 

    
    

    
    <ScrollAnimation animateIn="bounceInDown" delay={1000}>
        <h1
          className="normal txtshadow-header hit-the-floor"
          style={{
            color: '#fff',
            fontSize: '5rem',
           position: 'relative',
//            top: '100px',
           right: '1%',
//            backgroundColor: '#ff0000',
            textAlign: 'right', 
            float: 'none',
          }}
        >
          Follow me
        </h1>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="bounceInRight" delay={1100}>
        <h2
          className="narrow txtshadow mobile-txt"
          style={{
           fontSize:'3rem',
           color: 'white',
           position: 'relative',
        right: '5%',
            textAlign: 'right', 
          }}
        >
          into the
        </h2>
        </ScrollAnimation>
        
        
        <ScrollAnimation animateIn="bounceInUp" delay={1200}>
        <h3
          className="boom"
          style={{
           fontSize:'6rem',
           color: 'white',
           position: 'relative',
//            top: '230px',
           right: '1%',
            textAlign: 'right',
            textTransform: 'uppercase', 
          }}
        >
          Night
        </h3>
        </ScrollAnimation>
        
        

        
        
        
        <div className="mediacta1" style={{position: 'absolute', margin:'0 auto', top: '65%', textAlign:'center', width:'auto',}}>
	<PopNewsletter />
        </div>
        
        
        
        
        <ScrollAnimation animateOut="fadeOut" initiallyVisible={true} animateOnce={true} animatePreScroll={true} style={{position:'absolute', left:'3%', right:'3%', textAlign: 'center', bottom:'15%', fontSize: '80%', color: '#fff', zIndex: '0',}}>
        <div className="scrolldown txtshadow-header">SCROLL <IoIosArrowDropdownCircle /> MORE</div></ScrollAnimation>
        
        
        
        
        
        
        
        
        
        
        
        
       
    </div>
    
    
    





<ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
<Image alt="Todd Lambert Web development for photographers" filename="workshop.jpg" /><br />
<h2>Unique Night Photography</h2>
<p>Finding obscure locations and unusual subject matter, Todd has excelled at capturing rarely seen moments of time. The night is misunderstood and often feared.  Let his award winning portfolio prove to you that the night is indeed beautiful.</p>
<br />
<Link className="special grad" to="/galleries" style={{color:'#fff', textDecoration:'none', display:'flex',  justifyContent:'center', width:'230px',  padding:'3px 1rem 0 1rem', margin:'0 auto',}}>View Galleries <span style={{fontSize:'120%', position:'relative', right:'-8px', top:'0', color:'#fff',}}><GoTelescope /></span></Link>



</div>
</div>
</ScrollAnimation>






<ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div id="desc" className="container">
<div className="content" style={{padding:'1rem 1rem', display:'flex', flexDirection:'row',}}>

<div style={{width:'60%',}}>
<h2>Meet Todd Lambert</h2>
<p>Todd is a new breed of photographer focusing on remote and mostly "unknown" locations such as graveyards and other abandoned places at night. Todd is an adventurous spirit who lives full-time on the road while traveling across the country.
</p>
</div>

<div style={{width:'40%', margin:'0 0 0 1rem', }}>
<Image alt="Todd Lambert Web development for photographers" filename="todd.jpg" />Todd Lambert on location
</div>

</div>


<Link className="special grad" to="/about" style={{color:'#fff', textDecoration:'none', display:'flex',  justifyContent:'center', width:'250px',  padding:'3px 1.5rem 0 1rem', margin:'0 auto',}}>More About Todd <span style={{fontSize:'120%', position:'relative', right:'-8px', top:'0', color:'#fff',}}><FaRegAddressCard /></span></Link>


</div>
</ScrollAnimation>







<ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>

<div className="container">
<div className="content" style={{padding:'1rem 1rem', display:'flex', flexDirection:'row',}}>

<div style={{width:'40%', margin:'0 1rem 0 0', }}>
<Image alt="Todd Lambert Web development for photographers" filename="twilightscapes-rig.jpg" />Subaru Outback with 18-foot Aliner trailer coming out of Devils Peak, UT.
</div>

<div style={{width:'60%',}}>
<h2>Always on the hunt</h2>
<p>Todd scours the Internet, drives countless miles and lives and works in his unique overlanding road trip setup. You see, Todd is a photographer that specializes in photographing vintage cars, abandoned places and other pieces of unique American history.
</p>
</div>

</div>


<Link className="special grad" to="/capabilities" style={{color:'#fff', textDecoration:'none', display:'flex',  justifyContent:'center', width:'200px',  padding:'3px .5rem 0 1rem', margin:'0 auto',}}>Todds Gear <span style={{fontSize:'120%', position:'relative', right:'-4px', top:'0', color:'#fff',}}><GoGear /></span></Link>


</div>
</ScrollAnimation>




    
        <div
      className="full-width-image margin-top-0"
      style={{display: 'none',
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
      style={{display: 'none',
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
    
    
    
    
    
    <ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
    <Contact />
</ScrollAnimation>



    
       
    
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
