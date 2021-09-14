import React from "react"; 
import check from '../images/icon-check.svg';
import cross from '../images/icon-cross.svg'

function TodoItem (props) {
    return (
        <li className="todoListContainer__list-items">
            <div className="checkBackground">
                <img src={check} />
            </div>

            <p>{props.text}</p>
            <img src={cross}></img>
        </li>
    );
}

export { TodoItem };