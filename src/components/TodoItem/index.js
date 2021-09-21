import React from "react"; 
//import check from '../../images/icon-check.svg';
//import cross from '../../images/icon-cross.svg'


function TodoItem (props) {
    const [hover, setHover] = React.useState(false);

 
  
   
    return (
      <li className="todoListContainer__list-items">
        <span 
        onClick = {props.onCompleteTodo}
        className={`todoListContainer__list-icon ${props.completed ? 'checkedIcon':'noicon'}`}>       
        </span>

        <div 
        className="todoListContainer__list-text"
        onMouseEnter={() => {setHover(true)}} 
        onMouseLeave={() => {setHover(false)}}>
            <p                  
            className={`${props.completed && 'todoListContainer__list-textCompleted'}`} >
            {props.text}
            </p>
            <span onClick={props.onDelete} className={` ${hover && 'closeIcon'}`} ></span>          
        </div>
        
      </li>
    );
}

export { TodoItem };