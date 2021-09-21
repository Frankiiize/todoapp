import React  from "react";
//import { FilterTodos } from "../FilterTodos";



function TodosList (props) {
    return (
        <>
            <section className="todoListContainer">
                <ul className="todoListContainer__list">
                {props.children}
                </ul>
                
            </section>
        </>
    ); 
}
export { TodosList }; 

