import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { MenuProvider } from "./state";
import Navbar from "./components/nav";
import Home from './Pages/Home'
import About from "./Pages/About";
import Service from './Pages/Service';
import Skills  from "./Pages/Skills";
import Portfolio from './Pages/Portfolio';
import Achievement from './Pages/Achievement';
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer"
import './Pages/index.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();





const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: white;
    color: var(--text);
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  a {
    text-decoration: none;
  }
`;









const App = () => {
  return (


    <Router>



      <div  className="background" >

        
         

        <GlobalStyle />  
        <MenuProvider> 
          <Navbar />
       </MenuProvider> 



          
                 <Home/>
   
                <About/>

                <Service/>

                <Skills/>

                <Portfolio/>

               <Achievement/>
 
                 <Contact/> 

                <Footer/>
    




      </div>
    </Router>
       
  
       

  );
};

export default App;












