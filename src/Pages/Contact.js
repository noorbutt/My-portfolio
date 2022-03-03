
import React from "react";
import img from "./image/mypic.jpg";
import hd from "./image/hdd.png";
import './index.css'
import firebase from './image/fire.png'
import mail from './image/mail.png'
import world from './image/world.png'




// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                              Contact
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function Contact() {
  return (
    <section name="contact" id="contact" className="contact">



{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                 About me                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

      <div className="heading">
        <h1>CONTACT ME</h1>
        <img src={hd} />
      </div>



      <div className="container mt-5">

{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                 Image                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

        <div style={{ textAlign: "center" }}>
          <img width="200px" src={img} className="rounded-circle mt-2" />
        </div>




{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                               Contact Info                                */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

        <div className="row mt-5">
          
          <div className="col-md-4">

            <div
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <div className="cardd mb-4 text-center shadow p-3">
                <i className="fa icon">
                <img src={mail}  height="35px"  width="35px "    />
                </i>
                <h5>Email</h5>
                <p  className="contact-p">noorbuttnoorbutt706@gmail.com </p>
              </div>
            </div>
          </div>

          {/* <i className="fa fa-envelope icon"> */}


          <div className="col-md-4">
            <div
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <div className="cardd mb-4 text-center shadow p-3">
              {/* <i className="fa fa-globe icon"> */}

                <i className="fa  icon">
             
             

                 <img src={world}   height="35px"  width="35px "   />
         
                 </i>

                 <h5>Social media</h5>
                 <a
                  href="https://www.facebook.com/noorbutt.noorbutt.7965692   "
                  target="_blank"
                >
                  <i className="fa-solid fa-fire"></i>  <i className="fa fa-facebook sm"></i> 
                

                 </a> 
                <a href="https://github.com/noorbutt" target="_blank">
                  {" "}

                   
                 <i className="fa fa-github sm"></i> 

                </a>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <div className="cardd mb-4 text-center shadow p-3  " >
                 <i className="fa icon">
             
                <img className="contact_img"  src={ firebase }   height="35px"  width="35px " />
                </i>  


                <h5>Firebase</h5>
                <p className="contact-p">https://console.firebase.google.com/u/0/ </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}



