import React  from "react";
import { FaQuestionCircle } from 'react-icons/fa';

function DeleteTodoModal (
  {
    modalText,
    deleteTodo,
    setOpenModal,
    todoId
  }
  ){
  
  return (
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
  );

}

export { DeleteTodoModal };