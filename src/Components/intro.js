import React from 'react';
// import profile from '../public/profile.png'

function Intro(){
    return(
        <section id="profile">
        <div class="section__pic-container">
          <img src={process.env.PUBLIC_URL + 'profile.png'} alt="Nasibo profile picture" />
        </div>
        <div class="section__text">
          <p class="section__text__p1">Hello, I'm</p>
          <h1 class="title">Nasibo Dula</h1>
          <p class="section__text__p2">Frontend Developer</p>
          <div class="btn-container">
            <button class="btn btn-color-2" onclick="window.open('./assets/resume-example.pdf')">
              Download CV
            </button>
            <button class="btn btn-color-1" onclick="location.href='./#contact'">
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img src={process.env.PUBLIC_URL + 'github.png'} alt="My LinkedIn profile" class="giticon" onclick="location.href='https://linkedin.com/'"/>
            <img src={process.env.PUBLIC_URL + 'LinkedIn.png'} alt="My Github profile" class="lnkicon" onclick="location.href='https://github.com/'"/>
          </div>
        </div>
      </section>
    )
}
export default Intro;