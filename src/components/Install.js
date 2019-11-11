import React from 'react'
// import { navigate } from 'gatsby-link'
import { FiShare } from 'react-icons/fi';
import { FaRegPlusSquare } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll'
import CookieConsent from "react-cookie-consent"
import styled from "styled-components";

const CustomBox = styled.div`
#installer {
  animation: cssAnimation 0s 1s forwards;
  visibility: hidden;
}

@keyframes cssAnimation {
  to   { visibility: visible; }
}




@media (display-mode: standalone) {
  /* All installed PWAs */
  #installer{display: none !important;}
}
	
@media (hover: hover) {
#installer{display: none !important;}
}
	


`

const Install = () => (
<CustomBox style={{}} className="installer">

<div id="installer" className="" style={{display:'flex', justifyContent:'center', alignItems:'center', position: 'fixed', top:'60px', width:'100%', zIndex:'1', borderRadius:'8px', }}>

<ScrollAnimation animateIn="bounceInDown" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>

<CookieConsent
	debug={false}
	location="none"
	style={{ color:'inherit', width:'auto', background:'inherit',  alignItems:'inherit',  textAlign:'left', justifyContent:'center', margin:'0 auto', top:'60px', maxWidth:'600px', position:'', border:'0px solid red', }}
    className=""
    buttonText="Cancel"
	buttonStyle={{ background: "transparent", textDecoration:'underline', textAlign:'center', fontSize: "13px", bottom:'8%', position:'absolute', right:'30%', left:'30%', color:'inherit', }}
    expires={1}
    cookieName="Hytron.com-install-cookie"
>


<div className="container" style={{padding:'2rem 1rem', border:'1px solid #000', borderRadius:'8px',}}>


	
	<h4 style={{textAlign:'center', fontSize:'140%',}}>Install App</h4>
	<br />
	<span style={{fontSize:'100%',}}>This website has app functionality. Add it to your home screen to get added features on-the-go, like exclusive content, fullscreen and offline capability.</span>
	<br /><br />
	<div style={{fontSize:'80%', textAlign:'center',}}>On your device, locate the browser menu:</div>
	<br />
	
    <div style={{fontSize:'100%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'100%', margin:'0 auto', padding:' 1rem', border:'2px dotted #777', borderRadius:'8px',}}>
    
  <div style={{textAlign:'left', display:'flex', alignContent:'center', marginBottom:'1rem',}}>
 <FiShare style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} />
  1) Press the 'Share' button 
</div>
   
    
 <div style={{textAlign:'left', display:'flex', alignContent:'center',}}>
 <FaRegPlusSquare style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} /> 
 
2) Press 'Add to Home Screen'
 </div>
 
 </div>
 
    <br />
    <br />
    </div>
    
</CookieConsent>
</ScrollAnimation>
</div>

</CustomBox>
)

export default Install