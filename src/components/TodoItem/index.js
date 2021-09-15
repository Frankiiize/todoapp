import React from "react"; 
import check from '../../images/icon-check.svg';
import cross from '../../images/icon-cross.svg'

function TodoItem (props) {
    return (
        <li className="todoListContainer__list-items">
            
                <div className="checkBackground  ">
                    <img src={check} />
                </div>
                <p className="todoListContainer__list-text">{props.text}</p>
                <span className="closeIcon"></span>
        
        </li>
    );
}

export { TodoItem };