import React from 'react';

function Contact(){
    return(
        <section id="contact">
        <p class="section__text__p1">Get in Touch</p>
        <h1 class="title">Contact Me</h1>
        <div class="contact-info-upper-container">
          <div class="contact-info-container">
            <img src={process.env.PUBLIC_URL + 'email.png'} alt="Email icon" class="icon contact-icon " />
            <p><a href="mailto:nasibochudo@gmail.com">nasibochudo@gmail.com</a></p>
          </div>
          <div class="contact-info-container">
            <img src={process.env.PUBLIC_URL + 'LinkedIn.png'} alt="LinkedIn icon" class="icon contact-icon" />
            <p><a href="https://www.linkedin.com/in/nasibo-dula-chudo-8a1296241/">LinkedIn</a></p>
          </div>
        </div>
      </section>
    )
}
export default Contact;