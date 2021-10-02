import React from "react";
import sun from '../../images/icon-sun.svg';
import moon from '../../images/icon-moon.svg';

function Header () {
    const [theme, setTheme] = React.useState(true);

    React.useEffect(()=> {
      let body = document.querySelector('body');
      console.log('render theme')
      if(theme){
        body.className = 'light'
      }else {
        body.className = 'light light--dark'
      }
    },[theme]);
  
 /*  const storagedTheme = localStorage.getItem('theme');
  
  const themeChange = () => {
    let body = document.querySelector('body');
  debugger
    let themeIcon = document.querySelector('.themeIcon');
    if(body.className === theme){
      body.className = 'light light--dark';
      themeIcon.src= sun;
      setTheme('light');
      saveTheme('theme', 'light light--dark');
      
    } else {
      themeIcon.src= moon;
      body.className = 'light'
      setTheme('dark');
      saveTheme('theme', 'light');
    }
  } */

    return (
    <>
        <header className="headerContainer">
            <h1>TODO</h1>
            <img className="themeIcon" onClick={() => setTheme(!theme)} src={ (theme) ? moon : sun } alt="togle theme" />
        </header>
    </>
    );
}

export { Header }; 