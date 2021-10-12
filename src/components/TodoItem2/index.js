import React from "react";


function TodoItem2 (
  {
  provided,
  snapshot,
  completeTodo,
  todoID,
  completed,
  text,
  setOpenModal,
  setModalText,
  setTodoId,
  theme,
  device,
 }
){
  const [hover, setHover] = React.useState(false);
  
  const toOpenModal = () => {
    setOpenModal(true);
    setModalText(text)
    setTodoId(todoID)

  }
  const themeStyle= {
    ...provided.draggableProps.style,
    ...((snapshot.isDragging && theme  )
    ? { backgroundColor: 'hsl(233, 11%, 84%)',
        borderRadius: '5px'
      } 
    : { }),
    ...(snapshot.isDragging && !theme 
    ? { backgroundColor: 'hsl(237, 14%, 26%)',
        borderRadius: '5px'
      } 
    : { })
  }
 
 
  return (
    <li
    ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}  
    style={themeStyle}           
    className="todoListContainer__list-items"      
    >          
        <i           
        onClick = {() => completeTodo(todoID) }
        className={`todoListContainer__list-icon ${completed ? 'checkedIcon':'noicon'}`}>       
        </i>
        <div 
        onMouseEnter={() => {setHover(true)}} 
        onMouseLeave={() => {setHover(false)}}
        className="todoListContainer__list-text">
          <p 
          className={`${completed && 'todoListContainer__list-textCompleted'}`}>
          {text}
          </p>
          {(hover || device) && <i onClick={toOpenModal}  className='closeIcon' ></i>}
        </div>
    </li>
  );
}

export { TodoItem2 };