import React from "react"; 

function TodoItem (props) {
    const [hover, setHover] = React.useState(false);

    const toOpenModal = () => {
      props.setOpenModal(true);
      props.setModalText(props.text)
      props.setTodoId(props.id)
      console.log(props.id)
    }

    return (
      <>
        <li className="todoListContainer__list-items">
          <i 
          onClick = {props.onCompleteTodo}
          className={`todoListContainer__list-icon ${props.completed ? 'checkedIcon':'noicon'}`}>       
          </i>

          <div 
          className="todoListContainer__list-text"
          onMouseEnter={() => {setHover(true)}} 
          onMouseLeave={() => {setHover(false)}}>
              <p                  
              className={`${props.completed && 'todoListContainer__list-textCompleted'}`} >
              {props.text}
              </p>
              <i onClick={toOpenModal} className={` ${hover && 'closeIcon'}`} ></i>          
          </div>
          
        </li>
        
      </>
    );
}

export { TodoItem };