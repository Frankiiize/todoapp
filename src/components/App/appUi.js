import React from "react";

import { FaQuestionCircle } from 'react-icons/fa';

import { Header  } from '../Header';
import { NewTodo } from '../todoNew';
import { TodosList } from '../TodoList';
import { TodoItem } from '../TodoItem';
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
}) {
  return (
    <>
    <Header />

    <NewTodo
      newTodoValue={newTodoValue}
      setNewTodoValue={setNewTodoValue}
      addTodo={addTodo}
      openModal={openModal}
      setOpenModal={setOpenModal}
    />

    <TodosList>
      {error && <ErrorState error={error}/>}
     
      {loading && new Array(5).fill().map((item, index) => <LoadingState key={index}/>)}
      {(!loading && !todos.length ) && <EmpyState />}

      {todos.map((todo)=>(
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onCompleteTodo={() => completeTodo(todo.text)}
          onDelete= {() => deleteTodo(todo.id) }
          setOpenModal={setOpenModal}
          setModalText={setModalText}
        />
      ))}
      
    </TodosList>
    
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
      >
          <div className="modalContainer__card">
            <div className="modalContainer__text">
              <div className="modalContainer__text-icon">
                <FaQuestionCircle />
              </div>
              <p>Seguro que quieres eliminar</p>
              <p>{modalText}</p>
            </div>
            <div className="modalContainer__buttons">
              <button 
                onClick= {() => deleteTodo(modalText) }
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