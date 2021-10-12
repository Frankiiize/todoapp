import React from "react";



function Header ({children}) {
 
    return (
    <>
        <header className="headerContainer">
            {children}
            
        </header>
    </>
    );
}

export { Header }; 