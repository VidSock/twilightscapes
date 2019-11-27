import React from 'react'
import { Link } from 'gatsby'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagram, FaPinterestSquare, FaYoutubeSquare } from 'react-icons/fa'
import ScrollAnimation from 'react-animate-on-scroll'


/*
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
*/




const Footer = class extends React.Component {
  render() {
    return (
	    <ScrollAnimation animateIn="fadeIn" duration={4} initiallyVisible={false} animateOnce={false} animatePreScroll={false}>
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          



 



<ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', margin:'3rem 0'}}>
  <li><h3 className="socialtext">I&apos;m<br />Social:</h3></li>
<li><a className="social"  href="https://facebook.com/twilightscapes" alt="Facebook" title="Facebook"><FaFacebookSquare /><span>Facebook</span></a></li>
<li style={{display: 'none',}}><a className="social" href="https://www.linkedin.com/in/toddlambert" alt="LinkIn" title="LinkedIn"><FaLinkedin /><span>LinkedIn</span></a></li>
<li><a className="social" href="https://twitter.com/toddlambert" alt="Twitter" title="Twitter"><FaTwitterSquare /><span>Twitter</span></a></li>
<li><a className="social" href="https://www.instagram.com/twilightscapes" alt="Instagram" title="Instagram"><FaInstagram /><span>Instagram</span></a></li>
<li><a className="social" href="https://www.pinterest.com/twilightscapes/" alt="Pinterest" title="Pinterest"><FaPinterestSquare /><span>Pinterest</span></a></li>

<li><a className="social" href="https://www.youtube.com/channel/UCccK2S9xrcLnCR3dTuUwsxQ" alt="YouTube" title="YouTube"><FaYoutubeSquare /><span>YouTube</span></a></li>









</ul>

<div style={{textAlign: 'center', margin: '2rem 0 1rem 0', justifyContent: 'center', fontSize: '90%'}}><Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/terms/">Terms of Service</Link></div>



<div style={{textAlign: 'center', margin: '0 0 1rem 0', justifyContent: 'center', fontSize: '70%'}}>Copyright &copy; {(new Date().getFullYear())} Twilightscapes</div>
        </div>
      </footer>
      </ScrollAnimation>
    )
  }
}

export default Footer

