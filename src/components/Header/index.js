import React from "react";
import sun from '../../images/icon-sun.svg';
import moon from '../../images/icon-moon.svg';

function Header ({theme, setTheme}) {
  
  
  
  const themeChange = () => {
    let body = document.querySelector('body');
    console.log(typeof theme)
    let themeIcon = document.querySelector('.themeIcon');
    if(body.className === theme){
      body.className = 'light light--dark';
      themeIcon.src= sun;
      setTheme('dark')
      
    } else {
      themeIcon.src= moon;
      body.className = 'light'
      setTheme('light')
    }
  }

    return (
    <>
        <header className="headerContainer">
            <h1>TODO</h1>
            <img className="themeIcon" onClick={themeChange} src={moon} alt="togle theme" />
        </header>
    </>
    );
}

export { Header }; 