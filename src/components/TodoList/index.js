import React from "react";
import { TodoItem2 } from '../TodoItem2'
import { DragDropContext, Droppable, Draggable  } from 'react-beautiful-dnd';
import { ErrorState, LoadingState, EmpyState} from '../SkeletonLoading'

function TodoList (
  {
    handleDrag,
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
  return(
    <section className="todoListContainer">
          {error && <ErrorState error={error}/>}  
          {loading && new Array(1).fill().map((item, index) => <LoadingState key={index}/>)}
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