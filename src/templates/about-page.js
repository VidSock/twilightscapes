import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Image from '../components/Image'
import Content, { HTMLContent } from '../components/Content'
import { GiPlainArrow } from 'react-icons/gi'
// import { GoQuote } from 'react-icons/go'

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


.speech:after {
	content: '';
position: absolute;
top: 30%;
right: -18px;
width: 0;
height: 0;
	border: 60px solid transparent;
	border-left-color: inherit;
	border-right: 0;
	border-bottom: 0;
	 z-index:2;
}

.outer .container{width:90%; height:auto; margin:1rem auto; padding:1rem; border-radius:10px;}

.imgbox img{border-radius:12px; border:0px solid #000;}

.spacer33{height:33vh;}
.spacer66{height:66vh;}
.spacer99{height:99vh;}

p{line-height:150%;}


body.light .speech p span{color:#fff;}


@media (max-width: 48rem) {

.split{flex-direction:column !important; width:100% !important;}
.split div{width:100% !important}


.split div:first-child{order:2}
.split div:last-child{order:1}
.spacer33, .spacer66, .spacer99{height:15vh;}

.split.nowrap{flex-direction:row !important; width:100% !important;}
.split.nowrap div:first-child{order:1}
.split.nowrap div:last-child{order:2}
.split.nowrap .speech{border:1px solid;}

.split.nowrap div.speech{width: 60vw !important;}
.split.nowrap div.imgbox{width:30vw !important; margin-left:1rem !important;}

.split.nowrap .speech:after {
position: absolute;
top: 50%;
right: -20px;
width: 0;
height: 0;
	border: 20px solid transparent;
	border-left-color: inherit;
	border-right: 0;
	border-bottom: 0;
	 z-index:2;
}

}

@media (min-width: 58rem) {
	.outer{padding:0 10% !important; /* width:50%; */}
	.split1{border:2px solid red !important}
	}








`



export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
//   const [toggler, setToggler] = useState(false);

  return (
    <section className="about outer intro section" style={{paddingTop:'0', overflow:'hidden',}}>
    
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
<div className="txtshadow-header" style={{position:'absolute', top:'30px', left:'0', width:'100%', borderBottom:'12px solid ', transform:'rotate(8deg)', textAlign:'center', fontSize:'250%', zIndex:'1',}}><span style={{color:'#169dc6',}}>NOPE!</span></div>
<div style={{position:'absolute', top:'30px', left:'0', width:'100%', borderBottom:'12px solid ', transform:'rotate(-8deg)', textAlign:'center',}}> &nbsp;</div>
</ScrollAnimation> 
</p>

</div>

<ScrollAnimation animateIn="zoomInDown" animateOnce={false} delay={1800}> 
<div style={{margin:'1rem auto 0 auto', color:'#fff', width:'90%', textAlign:'center',}}>
<h3>OK, who wants to read that crap?</h3> Lets keep things real, shall we?
</div></ScrollAnimation> 

</ScrollAnimation>

 <ScrollAnimation animateIn="fadeIn" animateOut="slideOutUp" animateOnce={false} delay={900} style={{width:'40%', padding:'0',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 0 0 0',}}><Image alt="Todd Lambert Web development for photographers" filename="todd.jpg" />
<div style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}><span className="txtshadow">Todd Lambert on location</span></div>
</div>
</ScrollAnimation>

 </div>
 
  <ScrollAnimation animateIn="bounce" animateOut="fadeOut" initiallyVisible={true} animateOnce={true} animatePreScroll={false} delay={0} style={{}}>
  
 <div className="spacer33 bounce txtshadow-header" style={{fontSize:'500%', color:'#fff', textAlign:'center', position:'relative',}}>
 
 <GiPlainArrow className="" style={{padding:'1rem', borderRadius:'10px',}} />
 
 <span className="txtshadow-header" style={{position:'relative', top:'-25px', color:'#169dc6', fontSize:'50%', fontWeight:'bold', margin:'0 1rem 0 1rem',}}>SCROLL</span>
 
 <GiPlainArrow className="" style={{padding:'1rem', borderRadius:'10px',}} />
 
 </div>
  </ScrollAnimation>  
 
 

 
 
 
 
 <div style={{margin:'0 auto', width:'80%', border:'3px solid #fff', transform:'rotate(-3deg)', color:'#fff', backgroundColor:'#000', padding:'0 1rem',}}>
 <h3>Told in the style of reality TV:</h3>
 <Image alt="Behind The Photos - VH1 " filename="behind-the-photos.png" />
 </div>
 
 
 
{/*  <div className="spacer33"></div> */} 
 
{/* Show Intro */}
 

 <h2 style={{textAlign:'center', color:'#169dc6', fontSize:'180%', margin:'2rem auto 0 auto', padding:'0',}}>[Narrator Voice]</h2>
 
 <div className="container" style={{width:'60%', margin:'0 auto',}}>
 Todd had a nice childhood growing up in Southern California where he enjoyed most sports and grew up surfing, skateboarding and skiing.
 </div>
 
 
 
  
 
 
 
 <div className="split" style={{display:'flex', justifyContent:'center',  alignItems:'center', position:'relative', width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

<ScrollAnimation animateIn="rotateIn" animateOut="rotateOut" animateOnce={false} delay={100} style={{width:'50%', padding:'0',}}>    

<div className="imgbox shadow-3d" style={{border:'1px solid #444', borderRadius:'3px', padding:'5px 5px 25px 5px', background:'#fff', position:'relative', margin:'0 0', transform:'rotate(10deg)',}}><Image alt="Todd Lambert Web development for photographers" filename="todd-young1.jpg" style={{}}  />
<div className="" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#333', textAlign:'center', width:'100%',}}>Rockin the bowl cut!</div>
</div>
</ScrollAnimation>

<h2 style={{textAlign:'center', color:'#fff', transform:'rotate(-10deg)', fontSize:'150%', width:'40%', marginBottom:'1rem',}}>Todd was a cool kid!</h2>

 <ScrollAnimation animateIn="rotateIn" animateOut="rotateOut" animateOnce={false} delay={100} style={{width:'50%', padding:'0',}}>    

<div className="imgbox shadow-3d" style={{border:'1px solid #444', borderRadius:'3px', padding:'5px 5px 25px 5px', background:'#fff', position:'relative', margin:'0 0', transform:'rotate(-10deg)',}}><Image alt="Todd Lambert Web development for photographers" filename="todd-young2.jpg" style={{}}  />
<div className="" style={{position:'absolute', bottom:'8px', fontSize:'60%', color:'#333', textAlign:'center', width:'100%',}}>Future was so bright, needed shades</div>
</div>
</ScrollAnimation>

 </div>
 
 <h2 style={{textAlign:'center', color:'#169dc6', fontSize:'180%', margin:'2rem auto 0 auto', padding:'0',}}>[Fast-Forwarding Childhood]</h2>
 
 
 
 <ScrollAnimation animateIn="bounce" animateOut="fadeOut" initiallyVisible={true} animateOnce={true} animatePreScroll={false} delay={0} style={{}}>
  
 <div className="spacer33 bounce txtshadow-header" style={{fontSize:'500%', color:'#fff', textAlign:'center', position:'relative',}}>

 
 </div>
  </ScrollAnimation> 
  
  
  
  
  <ScrollAnimation animateIn="tada" animateOnce={false} delay={0}>
  
  <div style={{padding:'1% 2%', fontSize:'120%', color:'#fff', textAlign:'center', backgroundColor:'#000', margin:'0 auto', width:'60%', border:'1px solid',}}>
  <h5 className="txtshadow">The following content is rated:</h5> 
  <h4 className="txtshadow shadow-3d" style={{fontSize:'200%',}}>TV-MA</h4>
  <h6 className="txtshadow">This content may contain adult language , violence and mature themes not suitable for viewers under 18.</h6> 
  <h6 className="txtshadow">Viewer discretion is strongly advised.</h6> 
  </div>
</ScrollAnimation>      
              

<div className="spacer33"></div>


 <div className="split" style={{display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" animateOnce={false} delay={0} style={{width:'60%', order:'2',}}>    
<div className="container" style={{ width:'95%', borderRadius:'12px', margin:'0 0 0 -10px', padding:'1rem 2rem',}}>
<h2 style={{textAlign:'center', color:'#169dc6', fontSize:'130%', padding:'0',}}>[Narrator]</h2>

<p>It’s now many years later and Todd is fresh into the working world, after having busted his way out of high school with C- grades.</p>

 <p>Todd quickly followed that act with his encore performance of a drug and alchol-induced loss of his first two years of college.</p>
 
<p>Todd just never learned very well in a school environment and it always ended up just being a social thing for him. It was often where he seemed to get along with both the people and obstacles in his life, by faking it better than most.</p> 
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
<h3 style={{textAlign:'center', color:'#169dc6', fontSize:'130%', padding:'0', margin:'0 0 1rem 0',}}>[Narrator]</h3>

<h3>The Dawn Of The Internet</h3>
<p>The Internet had just really started, but the amount of knowledge at Todds fingertips was quite addictive to him.</p>

<p>Just as he’d been self-taught with most other things in his life, Todd immersed himself in multiple online personalities, each with intense work patterns and scope.</p>

<p>He was trying to learn as much as he could about all aspects of...</p> 


<h2 style={{textAlign:'center',}}> Website Design and Development</h2>
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

 <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" animateOnce={false} delay={0} style={{width:'45%', order:'2',}}>    
<div className="container" style={{ width:'95%', borderRadius:'12px', margin:'0 0 0 0', padding:'',}}>
<h3 style={{textAlign:'center', color:'#169dc6', fontSize:'130%', padding:'0', margin:'0 0 1rem 0',}}>[Narrator]</h3>
<h3>Todd becomes a new pioneer on the frontiers of the World Wide Web</h3>
<p>
Todd had worked hard and become one of the the once-vaunted “Webmasters” who controlled the Internet.</p>

<p>These Webmasters, were the ones that they made the critically-acclaimed movie “Hackers” about and starred Angelina Jolie. </p>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight" animateOnce={false} delay={100} style={{width:'55%', padding:'0', order:'1',}}>    

<div className="imgbox" style={{border:'0px solid black', position:'relative', margin:'0 1rem 0 0',}}><Image alt="Todd Lambert Web development for photographers" filename="hackthis.jpg" />
<div className="txtshadow" style={{position:'absolute', bottom:'5px', fontSize:'60%', color:'#ddd', textAlign:'center', width:'100%',}}>Biopic film of my life at this point</div>
</div>
</ScrollAnimation>

 </div>
 
 
       
       
       
       
       <div className="spacer33"></div>  
       

       
        <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" animateOnce={false} delay={0} style={{width:'70%', zIndex:'1',}}>    
<div className="container speech" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<p>
<span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span>
<span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span>
I once saw Todd eat an entire box of Krispie Kreme donuts and then he washed it down with at least 2 gallons of Mountain Dew.
<br /><br />And this was like, usually ever day...
</p>
<h5>- Todd Lambert</h5>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight" animateOnce={false} delay={100} style={{width:'30%', padding:'0', order:'2 !important',  zIndex:'0',}}>    

<div className="imgbox grad" style={{border:'4px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'50%', padding:'1rem', overflow:'hidden',}}><Image alt="Co-worker talks about Todd Lambert" filename="todd-toon.png" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'5px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>Todd Lambert</div>
</div>
</ScrollAnimation>

 </div>
       
       
       
       
       <div className="spacer33"></div>  
       

       
        <div className="split nowrap" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'no-wrap', position:'relative',  width:'92%', margin:'0 auto', padding:'1rem', borderRadius:'12px', overflow:'',}}>

 <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft" animateOnce={false} delay={0} style={{width:'60%', zIndex:'1',}}>    
<div className="container speech" style={{ width:'95%', borderRadius:'12px', margin:'0', padding:'', order:'1', position:'relative',}}>

<p>
<span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', top:'-5px', left:'-10px',}}>&#10077;</span>
<span className="txtshadow-header" style={{fontSize:'500%', color:'#ccc', position:'absolute', bottom:'-15px', right:'-10px',}}>&#10078;</span>
I once saw Todd eat an entire box of Krispie Kreme donuts and then he washed it down with at least 2 gallons of Mountain Dew.
<br /><br />And this was like, usually ever day...
</p>
<h5>- anonymous co-worker</h5>
</div>
</ScrollAnimation>

 <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight" animateOnce={false} delay={100} style={{width:'40%', padding:'0', order:'2 !important',  zIndex:'0',}}>    

<div className="imgbox grad" style={{border:'4px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'50%', padding:'1rem', overflow:'hidden',}}><Image alt="Co-worker talks about Todd Lambert" filename="coworker.png" style={{borderColor:'transparent',}} />
<div className="txtshadow" style={{position:'absolute', left:'0', bottom:'25px', fontSize:'70%', color:'#ddd', textAlign:'center', width:'100%',}}>anonymous co-worker</div>
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
