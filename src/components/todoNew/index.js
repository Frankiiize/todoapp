import React from "react";

function NewTodo () {
    return (
        <label className="newTodoContainer">
          <input value="" type="submit" className="newTodoContainer__button"/>
          <input
          placeholder="Create a new TODO" 
          className="newTodoContainer__input" />
          
        </label>
    );
}
export {NewTodo};