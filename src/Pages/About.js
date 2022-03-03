
import React, { useRef, useEffect } from "react";
import { Animated } from "react-animated-css";
import './index.css'
import hd from "./image/hdd.png"
import mypic from "./image/mypic.jpg"





export default function About() {

// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                              Animation
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

const myImg = useRef(null);
useEffect(() => {
  myImg.current.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: "translate(7px, -7px)" },
      { transform: "translate(0, 0)" },
    ],
    {
      duration: 4300,
      iterations: Infinity,
      yoyo: Infinity,
      animationTimingFunction: "linear",
      playbackRate: -30,
    }
  );
});




  return ( <section name="about" id="about" className="about">




  {/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
  {/*                                  heading                                  */}
  {/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
  
        <div className="heading pt-5">
          <h1>ABOUT ME</h1>

          <img src={hd}/>

        </div>
  


        <div className="container-fluid mt-4">
        <div className="row">


                

{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                   image                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}


          <div className="col-md-5 img mt-4 " style={{ textAlign: "center" }}>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >



              <img  width="216px"
               
               ref={myImg}

                style={{
                  position: "relative",
                  left: 7,
                  top: "1px",
                  borderRadius: 9,
                }}
                className="mt-5" src={mypic}   />
          
          <span className="imgBorder">    </span>

            </div>
          </div>





                  
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                 About me                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

          <div className="col-md-6 text mt-3 pt-3">
            <p className="aboutme">
              I am Mahnoor a energetic and dedicated professional  ReactJs
              web App Developer. I am always looking for clients who
              challenge me creatively. I know how to survive in this industry
              and I want to help your business do the same. I am proud to earn
              the trust of more than 1000+ clients worldwide.
            </p>
            <br />

            <div className="container-fluid" style={{ marginLeft: "-17px" }}>
              <div className="row">

                <div className="col-md-6">
                  <span className="title">NAME:</span>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <span className="word">Mahnoor Butt</span>
                </div>

                <div className="col-md-6">
                  <span className="title">JOB TITLE:</span>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <span className="word">ReactJS  Developer</span>
                </div>

              </div>
            </div>


<br />
<br />     






{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                  button                                   */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

<div
              data-aos="zoom-in-left"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="600"
            >
              <Animated
                animationIn="bounce"
                animationOut="bounce"
                animationInDuration={3000}
                isVisible={true}
              >

                <a
                  href="https://www.fiverr.com/mahnoorbutt790?up_rollout=true"
                  target="_blank"
                >
                  {" "}
                  <button className="btn btn-light">Hire Me </button>
                </a>
              </Animated>
            </div>




 </div>
 </div>
</div>
</section>
  );

}











