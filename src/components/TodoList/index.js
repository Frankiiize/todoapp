import React from "react";
import { TodoItem2 } from '../TodoItem2'
import { DragDropContext, Droppable, Draggable  } from 'react-beautiful-dnd';
import { ErrorState, LoadingState, EmpyState} from '../SkeletonLoading'

function TodoList (
  {
    saveTodos,
    error,
    loading,
    todos,
    searchedTodos,
    completeTodo,
    setOpenModal,
    setModalText,
    setTodoId,
    theme,
    setTheme,
    device
  }) {
    
  const handleDrag = (result) => {
    if(!result.destination) return;
    const newTodos = [...todos];
    const [reorderedItem] = newTodos.splice(result.source.index, 1);
    newTodos.splice(result.destination.index, 0, reorderedItem)
    saveTodos(newTodos)

  }
    
  return(
    <section className="todoListContainer">
          {error && <ErrorState error={error}/>}  
          {loading &&  <LoadingState />}
          {(!loading && !todos.length ) && <EmpyState />}


      <DragDropContext onDragEnd={handleDrag}>         
            <Droppable droppableId='TODO_LIST1'>
              {(provided, snapshot) => (
                <ul {...provided.droppableProps} ref={provided.innerRef} 
                className="todoListContainer__list">
                  {searchedTodos.map((todo, index) => (
                   
                    <Draggable
                    key={todo.id}
                    draggableId={todo.id} 
                    index={index}
                    >
                    {(provided, snapshot) => (
                        <TodoItem2
                        completeTodo={completeTodo}
                        provided={provided}
                        snapshot={snapshot}
                        todoID={todo.id}
                        completed={todo.completed}
                        text={todo.text}
                        setOpenModal={setOpenModal}
                        setModalText={setModalText}
                        setTodoId={setTodoId}
                        theme={theme}
                        setTheme={setTheme}
                        device={device}
                        />
                    )}
                    </Draggable>            
                  ))}
                  {provided.placeholder}
                </ul>              
              )}
            </Droppable>

      </DragDropContext>
    </section>
  );
}
export { TodoList };