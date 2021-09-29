import React from "react";
import { DragDropContext, Droppable, Draggable  } from 'react-beautiful-dnd';

import { FaQuestionCircle } from 'react-icons/fa';

import { Header  } from '../Header';
import { NewTodo } from '../todoNew';
//import { TodosList } from '../TodoList';
//import { TodoItem } from '../TodoItem';
import { TodoItem2 } from '../TodoItem2'
import { FilterTodos } from '../FilterTodos';
import { Footer } from '../Footer';
import { Modal } from '../Modals';

//render States 
import { ErrorState, LoadingState, EmpyState} from '../SkeletonLoading'


function AppUi({
  newTodoValue,
  setNewTodoValue,
  addTodo,
  loading, 
  error,
  unCompletedTodos,
  totalTodos,
  completeTodo,
  deleteTodo,
  deleteClear,
  completeTodos,
  activeTodos,
  allTodos,
  todos,
  openModal,
  setOpenModal,
  modalText,
  setModalText,
  todoId,
  setTodoId,
  handleDrag,
  theme,
  setTheme,

}) {
  
  return (
    <>
    <Header
    theme={theme}
    setTheme={setTheme}
     />

    <NewTodo
      newTodoValue={newTodoValue}
      setNewTodoValue={setNewTodoValue}
      addTodo={addTodo}
      openModal={openModal}
      setOpenModal={setOpenModal}
  
    />


    <section className="todoListContainer">
      <DragDropContext onDragEnd={handleDrag}>
          {error && <ErrorState error={error}/>}  
          {loading && new Array(4).fill().map((item, index) => <LoadingState key={index}/>)}
          {(!loading && !todos.length ) && <EmpyState />}
            <Droppable droppableId='TODO_LIST1'>
              {(provided, snapshot) => (
                <ul {...provided.droppableProps} ref={provided.innerRef} 
                className="todoListContainer__list">
                  {todos.map((todo, index) => (
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
   


    
      {/* <TodosList>
        {error && <ErrorState error={error}/>}
      
        {loading && new Array(4).fill().map((item, index) => <LoadingState key={index}/>)}
        {(!loading && !todos.length ) && <EmpyState />}

         {todos.map((todo,index)=>(
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onCompleteTodo={() => completeTodo(todo.id)}
            onDelete= {() => deleteTodo(todo.text) }
            setOpenModal={setOpenModal}
            setModalText={setModalText}
            setTodoId={setTodoId}
            id={todo.id}
        
          />
      
        ))} 
      
        
      </TodosList> */}
    
    
    <FilterTodos
      unCompletedTodos={unCompletedTodos}
      onClearComplete={deleteClear}
      onCompleteTodos={completeTodos}
      onActiveTodos={activeTodos}
      onAllTodos={allTodos}
     />

    <Footer /> 
    
  

    {!!openModal && (
    
      <Modal 
      deleteTodo={deleteTodo}
      setOpenModal={setOpenModal}
      modalText={modalText}
      todoId={todoId}
      >
          <div className="modalContainer__card">
            <div className="modalContainer__text">
              <div className="modalContainer__text-icon">
                <FaQuestionCircle />
              </div>
              <p>Seguro que quieres eliminar</p>
              <p>{modalText}</p>
              <p>TODO ID={todoId}</p>
            </div>
            <div className="modalContainer__buttons">
              <button 
                onClick= {() => deleteTodo(todoId) }
                className="modalContainer__buttons-confirm">Confirmar</button>
              <button           
                onClick={() => setOpenModal(false)}
                className="modalContainer__buttons-out">Salir</button>
            </div>
          </div>
      </Modal>

    )}
  
  </>
  );
}

export { AppUi };