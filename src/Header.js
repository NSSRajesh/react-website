import React, { useState } from "react";

function Header(){

    const [isMobile,setisMobile]=useState(false)

    return(
        <div>
            <header id="header">
                <div className="hdr-container">
                    <div className="hdr-row">
                        <h1 className="logo"><a href="#">GP<span>.</span></a></h1>
                        <button className="burger-menu" onClick={()=>setisMobile(!isMobile)}>
                        {isMobile ? <i class="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
                        </button>
                        
                        <nav className={isMobile ? 'navi' : 'nav-bar'} onClick={()=>setisMobile(false)}>
                            <ul> 
                                <li><a href="#" className="color">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#service">Serivces</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><a href="#drop">Drop Down</a></li>
                                <li><a href="#contect">Contect</a></li>
                            </ul>
                        </nav>
                            <a href="#" className="Get-btn">Get Started</a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;