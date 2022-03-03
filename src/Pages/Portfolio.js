
import React from "react";
import img1 from "./image/p1.jpg";
import img4 from "./image/p4.jpg";
import todo from './image/todo-app.png';
import hd  from "./image/hdd.png";
import game from "./image/game.png"
import animates from "./image/animates.png"
import Book from "./image/books.png"
import shoe from "./image/shoe.png"
import cloth from "./image/crwon-cloth.png"





// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                             portfolio
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function Portfolio() {
  return (
    <section name="portfolio" name="portfolio" className="portfolio">

{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                  heading                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
      <div className="heading">
        <h1>PORTFOLIO</h1>
        <img   src={hd}    />
      </div>
      <br />
      <br />
      <br />



{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                   cards                                   */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

      <div className="container">
        <div className="row">


        <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={Book}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">  Book finder </h5>
                  <a
                    href="https://redux-app-b8d97.web.app/"
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/noorbutt/Book-finder "
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>





          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img1}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Expense Tracker</h5>
                  <a
                    href=" http://expense-tracker-2004.surge.sh/"
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/noorbutt/covid_tracker   "
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={shoe}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">shoe Store  </h5>
                  <a href="http://shoestore2004-.surge.sh/" target="_blank">
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/noorbutt/shoes_website"
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={img4}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">OLX clone</h5>
                  <a href="https://olx-web-32573.web.app/" target="_blank">
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a href="https://github.com/noorbutt/Olx-website" target="_blank">
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>




          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3 ">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={animates}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Animated web  </h5>
                  <a
                    href="https://architect-website-dd521.web.app/  "
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/noorbutt/architect_design "
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>





          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={game}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Javascript games</h5>
                  <a
                    href="  https://practice-f1ebd.web.app/ "
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href=" https://github.com/noorbutt/javascript_game "
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>




          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={cloth}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Crwn Clothing store </h5>
                  <a
                    href="https://crwn-clowthing-live.herokuapp.com/  "
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href=" https://practice-f1ebd.web.app/ "
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div class="card mb-5 shadow ml-3 mr-3">
                <img
                  class="card-img-top pl-4 pr-4"
                  src={todo}
                  alt="Card image cap"
                />
                <div class="card-body text-center">
                  <h5 class="card-title">  todo app  </h5>
                  <a
                    href= " https://music-piano-8f110.firebaseapp.com/ "
                    target="_blank"
                  >
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </a>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <a
                    href="https://github.com/noorbutt/ReactTodo"
                    target="_blank"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>



       



{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}
{/*                                 button                                  */}
{/* // ======================°°°°°°°°°°°°°°°°°°°°°°°========================= */}

        <div className="moreProj text-center">

          <a href="https://github.com/noorbutt" target="_blank">
            <button className="btn btn-light">More Projects</button>
          </a>
        </div>

      </div>
    </section>


  );
}














































