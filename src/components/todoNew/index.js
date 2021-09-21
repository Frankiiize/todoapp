import React from "react";

function NewTodo ({newTodoItem, setNewTodoItem}) {
  
 

  const newTodoInput = (event) => {
    console.log(event.target.value)
    setNewTodoItem(event.target.value)
  }

    return (
      <label className="newTodoContainer">
        <input 
        value="" 
        type="submit" 
        className="newTodoContainer__button"/>
        
        <input
        onChange={newTodoInput}
        value={newTodoItem}
        placeholder="Create a new TODO" 
        className="newTodoContainer__input" />
        
      </label>
    );
}
export { NewTodo };