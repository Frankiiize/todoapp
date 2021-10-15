import React from "react";
import sun from '../../images/icon-sun.svg';
import moon from '../../images/icon-moon.svg';

function HeaderItem ({theme, setTheme}){

    
    let body = document.querySelector('body');
   
    const toggleTheme = () => {
      setTheme(!theme)
      if(!theme){
        body.className = 'light'
       
      }else {
        body.className = 'light light--dark'
      }
    }
    React.useEffect(() => {
      body.className = 'light'
    },[body])

  return (
    <>
      <h1>TODO</h1>

  
        <img className="themeIcon" onClick={toggleTheme} src={ (theme) ? moon : sun } alt="togle theme" />


    </>

  );

}
export {HeaderItem};