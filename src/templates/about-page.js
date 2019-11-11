import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import ScrollAnimation from 'react-animate-on-scroll';

import styled from 'styled-components'

const CustomBox = styled.div`

.intro:before{
	content: "About Twilightscapes";

position:absolute;
display: flex;
align-items: center;
justify-content: center;
font-size:380%; color:#f8f8fc; text-shadow: 12px 7px 15px 12px black;
}



`



export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
//   const [toggler, setToggler] = useState(false);

  return (
    <section className="outer intro section" style={{paddingTop:'0',}}>
    
    <ScrollAnimation animateIn="bounceInUp" animateOut="bounceInDown" animateOnce={true} delay={1000}>
      <div className="container">
        <div className="columns">

              <h2 className="title has-text-weight-bold1">
                {title}
              </h2>
              <PageContent className="content" content={content} />
        </div>
      </div>
      </ScrollAnimation>
      
      
    <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={100}>
       <div className="container">
              <h2 className="">
                [fast-forward through childhood]
              </h2>
            
              
              
<p>It’s now many years later, I am fresh into the working world, after having just busted out of high school with C- grades, and then quickly followed by a drug and alchol-induced loss of my first two years of college.</p>

<p>
I never learned in a school environment very well and it was always just a social thing for me (which was and still is awkward to me). I was a good “front man” that got along with lots of people and obstacles by faking it better than most.</p> 

<h4 style={{padding:'1% 12%', textAlign:'center', backgroundColor:'#ff0000',}}>[Fair Warning]<br /> This story gets long, dirty and involved past this point
              <br />[Scroll at your own peril]</h4>
              
              
       </div>
       </ScrollAnimation>
       
       
       
       
       
           <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={100}>
       <div className="container">
              <h2 className="">
                [fast-forward through childhood]
              </h2>
                      
<p>The Internet had just really started, but the amount of knowledge at my fingertips was honestly, quite addictive. Just as I’ve been self-taught with just about all things in my life, I had immersed myself in multiple online personalities each with intense work patterns to learn as much as I could about all aspects of…dun dun dun:</p> 

<h4> Website Design and Development</h4>
              
       </div>
       </ScrollAnimation>
       
       
       
       <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={100}>
       <div className="container">
              <h2 className="">
               The Internet was new, it was the World Wild Web BABY!
              </h2>

<p>
I was one of the the once-vaunted “Webmasters” who controlled the Internet. We were the ones they made the movie “Hackers” about. In fact, I almost had a Gibson one time, just barely out of my grasp, but I digress.</p>
   
       </div>
       </ScrollAnimation>
       
       
       
       <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={100}>
       <div className="container">
              <h2 className="">
              [cue dramatic music]
              </h2>
              <br /><h4>[this passage spoken with the VH-1 announcer’s voice]</h4>

<p>
But then it all came crashing down for Todd. Quickly, his body succumbed from the years of excessive 1 and 0’s</p>
   
       </div>
       </ScrollAnimation>
       
       
       
       
       <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={100}>
       <div className="container">
              <h2 className="">
              [cue dramatic music]
              </h2>
              <br /><h4>[this passage spoken with the VH-1 announcer’s voice]</h4>

<p>
But then it all came crashing down for Todd. Quickly, his body succumbed from the years of excessive 1 and 0’s</p>
   
       </div>
       </ScrollAnimation>
      
      
      
      
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
