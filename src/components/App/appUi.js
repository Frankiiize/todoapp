import React from "react";


import { DeleteTodoModal  } from "../DeleTodoModal";

import { Header  } from '../Header';
import { NewTodo } from '../todoNew';

import { FilterTodos } from '../FilterTodos';
import { Footer } from '../Footer';
import { Modal } from '../Modals';

//render States 

import { TodoList } from "../TodoList";
import { HeaderItem } from "../Header/HeaderItems";


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
  saveTodos,
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
     >
      <HeaderItem
        theme={theme}
        setTheme={setTheme}
      />
     </Header>

    <NewTodo
      newTodoValue={newTodoValue}
      setNewTodoValue={setNewTodoValue}
      addTodo={addTodo}
      openModal={openModal}
      setOpenModal={setOpenModal}
      loading={loading}
    />


    <TodoList
      saveTodos={saveTodos}
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
      loading={loading}
     
     />

    <Footer /> 
    
  

    {!!openModal && (
    
      <Modal 
      setOpenModal={setOpenModal}
      >
          <DeleteTodoModal
            modalText={modalText}
            deleteTodo={deleteTodo}
            setOpenModal={setOpenModal}
            todoId={todoId}
          
           />
      </Modal>

    )}
  
  </>
  );
}

export { AppUi };