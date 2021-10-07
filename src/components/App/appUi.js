import React from "react";

import { FaQuestionCircle } from 'react-icons/fa';

import { Header  } from '../Header';
import { NewTodo } from '../todoNew';

import { FilterTodos } from '../FilterTodos';
import { Footer } from '../Footer';
import { Modal } from '../Modals';

//render States 

import { TodoList } from "../TodoList";


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
  
  filterValue,
  setFiltervalue,
  searchedTodos,
  device,
  
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


    <TodoList
      handleDrag={handleDrag}
      error={error}
      loading={loading}
      todos={todos}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      setModalText={setModalText}
      setTodoId={setTodoId}
      theme={theme}
      setOpenModal={setOpenModal}
      setTheme={setTheme}
      device={device}
      
    />
  
    
    <FilterTodos
      unCompletedTodos={unCompletedTodos}
      onClearComplete={deleteClear}
      onCompleteTodos={completeTodos}
      onActiveTodos={activeTodos}
      onAllTodos={allTodos}

      todos={todos}
      filterValue={filterValue}
      setFiltervalue={setFiltervalue}
      device={device}
     
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
              <p>TODO:{modalText}</p>       
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