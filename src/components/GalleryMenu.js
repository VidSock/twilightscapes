import React from 'react'
import styled from "styled-components";
import { Link } from 'gatsby'
// import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`

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