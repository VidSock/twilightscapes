import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/tw-logo-white.svg'
import Headroom from "react-headroom"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { GoArrowUp, GoTelescope } from 'react-icons/go'
import { AiFillBank } from 'react-icons/ai'
import { FaRegAddressCard, FaQuestionCircle, FaTelegramPlane } from 'react-icons/fa'

// import PopContact from '../components/PopContact'
// import ScrollAnimation from 'react-animate-on-scroll'


const Navbar = class extends React.Component {
  


  render() {
    return (
	    
          
<Headroom style={{ zIndex: '5', }}>
    <header className="header">
    
    <Link to="/" className="logolink" title="Logo - Back To Home">
    <img className="logo fadeInDown" src={logo} alt="Twilightscapes Logo" />
    </Link>
    
   

   
    
<input className="menu-btn" type="checkbox" id="menu-btn" />
<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

            <ul id="menu" className="menu">
            
            <li className="grad" style={{position:'relative',}}>
              <Link id="galleries" className="navbar-item" to="/galleries"  aria-owns="galmenu" style={{paddingRight:'50px',}}>
               Galleries <GoTelescope className="txtshadow" style={{fontSize:'30px', position:'absolute', right:'4px', top:'12px',}}/>
              </Link>
              
              </li>
              
              
              <li style={{position:'relative',}}>
              <Link id="vault" className="navbar-item" to="/vault" style={{paddingRight:'50px',}}>
                The Vault <AiFillBank className="txtshadow" style={{fontSize:'30px', position:'absolute', right:'10px', top:'15px',}}/>
              </Link>
              </li>
              
            
            <li className="grad" style={{position:'relative',}}>
              <Link className="navbar-item" to="/about" style={{paddingRight:'50px',}}>
                About <FaRegAddressCard className="txtshadow" style={{fontSize:'30px', position:'absolute', right:'10px', top:'15px',}}/>
              </Link>
              </li>
              
               <li className="grad" style={{position:'relative',}}>
              <Link className="navbar-item" to="/capabilities" style={{paddingRight:'50px',}}>
                FAQs <FaQuestionCircle className="txtshadow" style={{fontSize:'30px', position:'absolute', right:'10px', top:'15px',}}/>
              </Link>
              </li>
              
              {/* <li>
              <Link className="navbar-item" to="/products">
                How We Do It
              </Link>
              </li> */}
              
              
              
              
              
              
              
              


              <li style={{position:'',}}>
             
             <label className="modal-btn grad" htmlFor="modal-toggle" style={{position:'relative', textShadow: '1px 2px 0px black', paddingRight:'20px',}}>Contact <FaTelegramPlane className="contact-icon txtshadow" style={{fontSize:'30px', position:'relative', right:'-6px', top:'12px',}}/></label> 
             
              </li>
              
              
            </ul>
            
            
      
      
   </header>
   
    <div className="themer"><ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="themeSlide grad-vert">
            <input
              type="checkbox" value="None" id="themeSlide" name="check"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            
          <label htmlFor="themeSlide" style={{color:'#222', textAlign:'center', padding:'1px',}}>Theme</label></div>
        )}
      </ThemeToggler></div>
      
      
      <a href="#topofpage" title="Back To Top" className="back-to-top "><GoArrowUp /></a>
</Headroom>
        
      
      
    )
  }
}

export default Navbar
