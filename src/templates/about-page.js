import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from '../components/Image'
import Content, { HTMLContent } from '../components/Content'
import { GiPlainArrow } from 'react-icons/gi'

import ScrollAnimation from 'react-animate-on-scroll'

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

.outer .container{width:90%; height:auto; margin:1rem auto; padding:1rem; border-radius:10px;}

.imgbox img{border-radius:12px; border:1px solid #000;}

.spacer33{height:33vh;}
.spacer66{height:66vh;}
.spacer99{height:99vh;}

@media (max-width: 48rem) {

.split{flex-direction:column !important; width:100% !important;}
.split div{width:100% !important;}

.split div:first-child{order:2 !important;}
.split div:last-child{order:1 !important;}
.spacer33, .spacer66, .spacer99{ display:none; height:5vh;}

}

`



export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
//   const [toggler, setToggler] = useState(false);

  return (
    <section className="outer intro section" style={{paddingTop:'0', overflow:'hidden',}}>
    
    <ScrollAnimation animateIn="bounceInUp" animateOut="bounceInDown" animateOnce={true} delay={1000}>
      <div className="container" style={{display:'none',}}>
        <div className="columns">

              <h2 className="title has-text-weight-bold1">
                {title}
              </h2>
              <PageContent className="content" content={content} />
        </div>
      </div>
      </ScrollAnimation>
      
      
 <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative', backgroundColor:'#222', width:'92%', margin:'0 auto', padding:'1rem', borderBottom:'4px solid #000', borderTop:'1px solid #000', boxShadow:'0px 0px 20px 0px #000', borderRadius:'0 0 20px 20px', overflow:'',}}>

 
 <ScrollAnimation animateIn="fadeIn" animateOut="slideOutUp" animateOnce={false} delay={900} style={{width:'60%',}}>    
<div className="container" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'',}}>
<h2>Meet Todd</h2>
<p style={{position:'relative',}}>My name is Todd Lambert, and this is my story. It all began when the country was a different place, my parents were wanting to have a family, and I was born.

<ScrollAnimation animateIn="fadeIn" animateOnce={false} delay={1500}> 
<div className="txtshadow-header" style={{position:'absolute', top:'30px', left:'0', width:'100%', borderBottom:'12px solid ', transform:'rotate(8deg)', textAlign:'center', fontSize:'250%', zIndex:'1',}}><span style={{color:'lightblue',}}>NOPE!</span></div>
<div style={{position:'absolute', top:'30px', left:'0', width:'100%', borderBottom:'12px solid ', transform:'rotate(-8deg)', textAlign:'center',}}> &nbsp;</div>
</ScrollAnimation> 
</p>

</div>

<ScrollAnimation animateIn="zoomInDown" animateOnce={false} delay={1800}> 
<div style={{margin:'1rem auto 0 auto', color:'#fff', width:'90%', textAlign:'center',}}>
<h3>OK, so who wants to read that crap?</h3> Lets keep things real and tell it like it, shall we?
</div></ScrollAnimation> 

</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="slideOutUp" animateOnce={false} delay={900} style={{width:'40%', padding:'0',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}><Image alt="Todd Lambert Web development for photographers" filename="todd.jpg" />
<div style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}><span className="txtshadow">Todd Lambert on location</span></div>
</div>
</ScrollAnimation>

 </div>
 
  <ScrollAnimation animateIn="bounce" animateOut="slideOutUp" initiallyVisible={true} animateOnce={true} animatePreScroll={false} delay={900} style={{}}>
  
 <div className="spacer33 bounce txtshadow-header" style={{fontSize:'500%', color:'#fff', textAlign:'center', position:'relative',}}>
 
 <GiPlainArrow className="" style={{padding:'1rem', borderRadius:'10px',}} />
 
 <span className="txtshadow-header" style={{position:'relative', top:'-25px', color:'lightblue', fontSize:'50%', fontWeight:'bold', margin:'0 1rem 0 1rem',}}>SCROLL</span>
 
 <GiPlainArrow className="" style={{padding:'1rem', borderRadius:'10px',}} />
 
 </div>
  </ScrollAnimation>  
 
 
 
 
 
 
 
 
 
 
 

 <h2 style={{textAlign:'center', color:'#fff', fontSize:'180%', margin:'2rem 0',}}>[fast-forward through childhood]</h2>
 
 <div className="split" style={{display:'flex', justifyContent:'center',  alignItems:'center', position:'relative', width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 


<ScrollAnimation animateIn="rotateIn" animateOut="rotateOut" animateOnce={false} delay={100} style={{width:'50%', padding:'0',}}>    

<div className="imgbox shadow-3d" style={{border:'1px solid #444', borderRadius:'3px', padding:'5px 5px 25px 5px', background:'#fff', position:'relative', margin:'0 0', transform:'rotate(10deg)',}}><Image alt="Todd Lambert Web development for photographers" filename="todd-young1.jpg" style={{}}  />
<div className="" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#333', textAlign:'center', width:'100%',}}>Rockin the bowl cut!</div>
</div>
</ScrollAnimation>

<h2 style={{textAlign:'center', color:'#fff', transform:'rotate(-10deg)', fontSize:'150%', width:'40%', marginBottom:'1rem',}}>I was a cool kid!</h2>

 <ScrollAnimation animateIn="rotateIn" animateOut="rotateOut" animateOnce={false} delay={100} style={{width:'50%', padding:'0',}}>    

<div className="imgbox shadow-3d" style={{border:'1px solid #444', borderRadius:'3px', padding:'5px 5px 25px 5px', background:'#fff', position:'relative', margin:'0 0', transform:'rotate(-10deg)',}}><Image alt="Todd Lambert Web development for photographers" filename="todd-young2.jpg" style={{}}  />
<div className="" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#333', textAlign:'center', width:'100%',}}>Future was so bright, needed shades</div>
</div>
</ScrollAnimation>

 </div>
 
 
 
 
  
  <ScrollAnimation animateIn="tada" animateOnce={false} delay={0}>
  <h4 className="txtshadow shadow-3d" style={{padding:'1% 12%', fontSize:'120%', color:'#fff', textAlign:'center', backgroundColor:'#ff0000', margin:'2rem auto', width:'80%',}}>[ Fair Warning ]<br /> The story gets long and dirty past this point
              <br />[ Scroll at your own peril ]</h4>
</ScrollAnimation>      
              




 <div className="split" style={{display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" animateOnce={false} delay={0} style={{width:'60%', order:'2',}}>    
<div className="container" style={{ width:'95%', borderRadius:'12px', margin:'0 0 0 0', padding:'',}}>
<h2></h2>
<p>It’s now many years later, I am fresh into the working world, after having just busted out of high school with C- grades, and then quickly followed by a drug and alchol-induced loss of my first two years of college.</p>
<p>
I never learned in a school environment very well and it was always just a social thing for me (which was and still is awkward to me). I got along with lots of people and obstacles by faking it better than most.</p> 
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight" animateOnce={false} delay={100} style={{width:'40%', padding:'0 auto 0 auto', order:'1',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0',}}><Image alt="Todd Lambert Web development for photographers" filename="todd-young-metal.jpg" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>Yes, thats a Metallica hat</div>
</div>
</ScrollAnimation>

 </div>

       
       
       
      <div className="spacer33"></div>  
       

       
        <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" animateOnce={false} delay={0} style={{width:'60%',}}>    
<div className="container" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'',}}>
<h2>The Dawn Of The Internet</h2>
<p>The Internet had just really started, but the amount of knowledge at my fingertips was honestly, quite addictive. Just as I’d been self-taught with just about all things in my life, I had immersed myself in multiple online personalities each with intense work patterns to learn as much as I could about all aspects of…dun dun dun:</p> 

<h4> Website Design and Development</h4>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight" animateOnce={false} delay={100} style={{width:'40%', padding:'40px auto 40px auto',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}><Image alt="Todd Lambert Web development for photographers" filename="todd-young-business.jpg" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>Clean cut and baby-faced</div>
</div>
</ScrollAnimation>

 </div>
 
 
 
 
 
 <div className="spacer33"></div>  
       

       
        <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" animateOnce={false} delay={0} style={{width:'50%', order:'2',}}>    
<div className="container" style={{ width:'95%', borderRadius:'12px', margin:'0 0 0 0', padding:'',}}>
<h2>I was a pioneer of the new Internet Frontier</h2>
<p>
I was one of the the once-vaunted “Webmasters” who controlled the Internet. We were the ones they made the movie “Hackers” about. In fact, I almost had a Gibson one time, just barely out of my grasp, but I digress.</p>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight" animateOnce={false} delay={100} style={{width:'50%', padding:'0', order:'1',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 1rem 0 0',}}><Image alt="Todd Lambert Web development for photographers" filename="hackthis.jpg" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>Biopic film of my life at this point</div>
</div>
</ScrollAnimation>

 </div>
 
 
       
       
       
       
       <div className="spacer33"></div>  
       

       
        <div className="split" style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" animateOnce={false} delay={0} style={{width:'60%',}}>    
<div className="container" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'',}}>
<h2></h2>
<p>
But then it all came crashing down for Todd. Quickly, his body succumbed from the years of excessive 1 and 0’s</p>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight" animateOnce={false} delay={100} style={{width:'40%', padding:'0',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}><Image alt="Todd Lambert Web development for photographers" filename="todd-toon.png" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}></div>
</div>
</ScrollAnimation>

 </div>
       
       
       
       
       
       <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={100}>
       <div className="container">
              <h2 className="">
              [VH1 Announcer
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

<p>The stay-up-all-night-party-like-a-rock-star type of life he’d always dreamed of was in fact now killing him.</p>
<p>
With all of this power and great responsibility comes great lethargy, gluttony and ultimately, Diabetes Type II, a heart condition, unknown gastric issues, horrible near-sightedness and of course all the debt and other normal stresses of life.</p>
   
       </div>
       </ScrollAnimation>
       
       
       
       
       <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={100}>
       <div className="container">
              <h2 className="">
              [fade to black]
              </h2>
              
<p>
So, that was my hey-day of web development with the likes of Jeffrey Zeldman and Eric Meyer listed as friends on my Flickr (pro) account. Yup, that was me.</p>
   
       </div>
       </ScrollAnimation>
       
      
      
      
      <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={100}>
       <div className="container">
              <h2 className="">
              
              </h2>
              
<p>
It was here at this point that I was shining while I was sinking. I’d reached a great peak in my career, and I should have been basking in what that brought. I had the large McMansion in the Burbs, new cars, happy dogs and a great career. I should have been on top of the world, yet I felt empty and felt as though I was just going through the motions.</p>
   
       </div>
       </ScrollAnimation>
      
      
      
      
      <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={100}>
       <div className="container">
              <h2 className="">
              [enter photography]
              </h2>
              
<p>
In my free time over the last 10 years or so, I’d begun playing around with photography as a hobby. I really only had free time during the evenings hence I initially learned to photograph at night. I found that I really enjoyed the peacefulness and tranquility when I photographed alone at night.</p>
<p> I became fascinated with all things photography and I sought out to learn everything there was to learn about it. I have finally reached a point in my photography, where I honestly believe that it is the driving force in my life. The wind beneath my sails, if you want to call it that.</p>
   
       </div>
       </ScrollAnimation>
       
       
       
       
       
        <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={100}>
       <div className="container">
              <h2 className="">
             [and other various hobbies]
              </h2>
              
<p>
Over the years, I’ve always been intrigued by being places where I wasn’t supposed to be. It started as a kid, by sneaking out of my parents house every night and wandering the city streets, looking for the voices that called me out of my sleep. Learning to accept darkness and find peace in the unknown was something that became second nature to me, even though I wasn’t aware of it at the time.

There was actually several incidences of me pretending to be “sleep walking” to help explain my unusual fetish for the nocturnes. [end with a vampiric laughter]</p>
   
       </div>
       </ScrollAnimation>
       
       
       
       
       
       
       
       <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={100}>
       <div className="container">
              <h2 className="">
             
              </h2>
              
<p>
In trying to find my lost soul inside these decrepit and crumbling vestiges of our American past, I’d found something that actually tickled all my special spots.</p>

<p>I became obsessed with finding and photographing rusted cars, old ghost towns and remnants of America that had become long forgotten. The history of our past, seemed to call to me. I was enamored by ghosts of places that I’d never been, yet they felt like home when I got there.</p>
   
       </div>
       </ScrollAnimation>
       
       
       
       
       
       
       
       <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={100}>
       <div className="container">
              <h2 className="">
             [Looking Forward for Todd Lambert]
              </h2>
              
<p>
Ultimately, I had hit a wall and finally figured out that my life was way out of whack and badly needed to be reinvented. I’d worked at trying to stop the Krispy Kreme addiction and I’d lost about 80 pounds in a little over two years. I’d found that photography always provides a better ultimate reward than web design or even donuts. I just enjoyed it more than anything.</p>


<p>I’d made the decision to commit myself full-time to my photography.</p>
   
       </div>
       </ScrollAnimation>
       
       
       
       
       
       
        <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={100}>
       <div className="container">
              <h2 className="">
             Big Changes
              </h2>
              
<p>
I sold all my earthly possessions, my house, cars, tvs, everything.

I downsized my life to fit into an on-the-road lifestyle and I shed most of the belongings and stuff that had become shackles around my limbs and neck for so many years.</p>

<blockquote>The things I owned had in fact, owned me.</blockquote>

<p>I started trying to make as many changes as I could. Trying to put myself into new environments to learn and grow as an artist and as a person.

My mind became much clearer and my views were endless and the world was my back porch. I had no schedules, I had no agendas other than my own.</p>

<p>Living and working full-time on-the-road across the highways of America can be tough. Traveling across the country in search of a beauty that is elusive and fading, often makes for some wild circumstances. I always find that the experiences are so worth it though.</p>
   
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
