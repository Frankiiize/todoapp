import React from "react";

import { FaQuestionCircle } from 'react-icons/fa';

import { Header  } from '../Header';
import { NewTodo } from '../todoNew';
import { TodosList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { FilterTodos } from '../FilterTodos';
import { Footer } from '../Footer';
import { Modal } from '../Modals';

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
    />

    <TodosList>
      {loading && <p>Estamos cargando</p>}
      {error && <p>Error</p>}
      {(!loading && !todos.length ) && <p>crea tu primer todo</p>}

      {todos.map((todo)=>(
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onCompleteTodo={() => completeTodo(todo.id)}
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