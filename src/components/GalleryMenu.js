import React from 'react'
import styled from "styled-components";
import { Link } from 'gatsby'
// import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`

.galmenu{
display: flex; justify-content: space-around; align-items: center; margin:0 3%;
background:#111;
padding:4px 4px;
border-radius:10px;
border:1px solid #444;
}
.galmenu li {width:10%; padding:0; color:#fff; margin:0 2px; text-align: center;}

.galmenu .galgrad{display: block; padding:10px; border-radius:6px; border:1px solid #444; font-weight: bold; text-decoration: none; text-shadow: 1px 1px 1px black;}

.galmenu .galgrad{
background: rgb(125,126,125); /* Old browsers */
background: -moz-linear-gradient(top, rgba(125,126,125,1) 0%, rgba(14,14,14,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7d7e7d', endColorstr='#0e0e0e',GradientType=0 ); /* IE6-9 */
}

.galmenu [aria-current] {
background: rgb(126,209,234); /* Old browsers */
background: -moz-radial-gradient(center, ellipse cover, rgba(126,209,234,1) 0%, rgba(65,145,186,1) 40%, rgba(3,73,127,1) 100%); /* FF3.6-15 */
background: -webkit-radial-gradient(center, ellipse cover, rgba(126,209,234,1) 0%,rgba(65,145,186,1) 40%,rgba(3,73,127,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: radial-gradient(ellipse at center, rgba(126,209,234,1) 0%,rgba(65,145,186,1) 40%,rgba(3,73,127,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}


@media (max-width: 48rem) {
.galmenu{
display: flex; justify-content: space-around; flex-wrap: wrap; align-items: center; flex-shrink: inherit; flex-basis: 30%;
}
.galmenu li{width:17%; margin-top:4px;}

}


`



   
const GalleryMenu = () => (

   


<CustomBox style={{}}>

<ul className="galmenu">
      
      <li className="galmenu-item"><Link to="/gallery1" className="galgrad" title="Gallery 1">I</Link></li>
      <li className="galmenu-item"><Link to="/gallery2" className="galgrad" title="Gallery 2">II</Link></li>
      <li className="galmenu-item"><Link to="/gallery3" className="galgrad" title="Gallery 3">III</Link></li>
      <li className="galmenu-item"><Link to="/gallery4" className="galgrad" title="Gallery 4">IV</Link></li>
      <li className="galmenu-item"><Link to="/gallery5" className="galgrad" title="Gallery 5">V</Link></li>
      <li className="galmenu-item"><Link to="/gallery6" className="galgrad" title="Gallery 6">VI</Link></li>
      <li className="galmenu-item"><Link to="/gallery7" className="galgrad" title="Gallery 7">VII</Link></li>
      <li className="galmenu-item"><Link to="/gallery8" className="galgrad" title="Gallery 8">VIII</Link></li>
      <li className="galmenu-item"><Link to="/gallery9" className="galgrad" title="Gallery 9">IX</Link></li>
      <li className="galmenu-item"><Link to="/gallery10" className="galgrad" title="Gallery 10">X</Link></li>
      </ul>



</CustomBox>
  
)

export default GalleryMenu