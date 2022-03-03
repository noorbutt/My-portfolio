import React from 'react'
// import {Animated} from "react-animated-css";
// import Typist from 'react-typist';
import { Link, animateScroll as scroll } from "react-scroll";





export default function Text() {
  return (

<div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1200">


<div  style={{ height: "18vh" }}>

{/* <p>  HI! WELCOME HERE  </p> */}


</div> 




  <div className="text">

  <p>Hi! Welcome here</p>
  
    
<img  className="image"  src="https://www.emoji.com/wp-content/uploads/filebase/thumbnails/3d%20icons/emoji-3d%20icons-glossy-3d-icons-woman-waving-72dpi-forPersonalUseOnly.gif"    width="50px"  height="50"   /> 


  {/* <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}> */}
  <h2>I am Maryam - Web & Mobile<br />App Developer</h2> 
  {/* </Animated> */}



  <br />
  <Link className="anchor" activeClass="active" to="contact"  delay={100} spy={true} smooth={true}  offset={0} duration={900} >
  <button class="btn btn-light">Contact Me</button>
  </Link>



  </div>
  </div>


 )
}
 










