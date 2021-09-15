import React  from "react";



function TodosList (props) {
    return (
        <section className="todoListContainer">
            <ul className="todoListContainer__list">
            {props.children}
            </ul>
        </section>
    ); 
}
export {TodosList}; 

