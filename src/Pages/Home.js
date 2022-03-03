import React , {useRef, useEffect} from 'react';
import './index.css'
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import dev from './image/devp.png' 



 export default function Home() {



  const img4=useRef(null)
  useEffect(() => {
        img4.current.animate(
          [
            { transform: "translate(0, 0)" },
            { transform: "translate(0, 20px)" },
            { transform: "translate(0, 0)" }
          ],
          {
            duration: 4000,
            iterations: Infinity,
            yoyo:Infinity,
            animationTimingFunction:'linear',
            playbackRate:-30
          }
        );
  })



return  <div className='data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1200"'   >

  


<div className="home">


<div className="row">


<div className="col-md-6">


<div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1200" className="aos-init aos-animate">




<div  style={{ height: "10vh" }}>

{/* <p>  HI! WELCOME HERE  </p> */}


</div> 




<div  className="text">  

<p>  HI! WELCOME HERE  </p>

<img  className="image"  src="https://www.emoji.com/wp-content/uploads/filebase/thumbnails/3d%20icons/emoji-3d%20icons-glossy-3d-icons-woman-waving-72dpi-forPersonalUseOnly.gif"   width="50px"  height="50"    /> 

<h2 className='home-h2'>I ' m Mahnoor Butt - ReactJS Developer </h2>   


<Link className="anchor" activeClass="active" to="contact"  delay={100} spy={true} smooth={true}  offset={0} duration={900} >
<button class="btn btn-light">Contact Me</button>
</Link>





</div>




</div>
</div>



<div className="col-md-6 mt-5">


<div className="image">

<img className="img" ref={img4}    src={dev}  width="530px"  height="400" ></img>
  


</div>

</div>

</div>

     {/* extra attached  */}
         

</div>
</div>


 }






