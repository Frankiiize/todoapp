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
  setTheme,
 }
){
  const [hover, setHover] = React.useState(false);
  
  const toOpenModal = () => {
    setOpenModal(true);
    setModalText(text)
    setTodoId(todoID)

  }
  const isMobile = window.innerWidth <= 768 ? true : false;
  return (
    <li
    ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}  
    style={{
        ...provided.draggableProps.style,
        ...(snapshot.isDragging && theme === 'light' 
        ? { backgroundColor: 'hsl(233, 11%, 84%)',
            borderRadius: '5px'
          } 
        : { }),
        ...(snapshot.isDragging && theme === 'dark' 
        ? { backgroundColor: 'hsl(237, 14%, 26%)',
            borderRadius: '5px'
          } 
        : { })
      }}           
    className="todoListContainer__list-items"      
    >          
        <i           
        onClick = {() => completeTodo(todoID) }
        className={`todoListContainer__list-icon ${(completed)&& 'checkedIcon'}`}>       
        </i>
        <div 
        onMouseEnter={() => {setHover(true)}} 
        onMouseLeave={() => {setHover(false)}}
        className="todoListContainer__list-text">
          <p>{text}</p>
          {(hover || isMobile) && <i onClick={toOpenModal}  className='closeIcon' ></i>}
        </div>
    </li>
  );
}

export { TodoItem2 };