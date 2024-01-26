import React from 'react';
import Navbar from './Components/navbar';
import Intro from './Components/intro';
import About from './Components/about';
import Projects from './Components/projects';
import Contact from './Components/contact';
import Footer from './Components/footer';
function Home(){
    return(
        <div>
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
        </div>
    )
}
export default Home;