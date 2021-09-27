import React from "react";
import sun from '../../images/icon-sun.svg';
import moon from '../../images/icon-moon.svg';

function Header () {
  

  const themeChange = () => {
    let body = document.querySelector('body');
    let themeIcon = document.querySelector('.themeIcon');
    if(body.className === 'theme'){
      body.className = 'theme theme--dark';
      themeIcon.src= moon;
      
    } else {
      body.className = 'theme'
      themeIcon.src= sun;
    }
  }

    return (
    <>
        <header className="headerContainer">
            <h1>TODO</h1>
            <img className="themeIcon" onClick={themeChange} src={sun} alt="togle theme" />
        </header>
    </>
    );
}

export { Header }; 