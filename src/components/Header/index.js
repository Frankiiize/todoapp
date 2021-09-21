import React from "react";
import sun from '../../images/icon-sun.svg';

function Header () {
    return (
    <>
        <header className="headerContainer">
            <h1>TODO</h1>
            <img src={sun} alt="togle theme" />
        </header>
    </>
    );
}

export { Header }; 