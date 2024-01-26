import React from 'react';

function Navbar(){
    return(
        <nav id="desktop-nav">
            <div class="logo">Nasibo Dula</div>
            <div>
                <ul class="nav-links">
                    <li><a href="#about">Home</a></li>
                    <li><a href="#experience">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;