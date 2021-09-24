import React from "react";

function NewTodo ({newTodoValue, setNewTodoValue, addTodo}) {
  const [hover, setHover] = React.useState(false);
  const onSubmit = (event) => {
    event.preventDefault()
    !!newTodoValue && addTodo(newTodoValue)
    setNewTodoValue('')
  }
 

  const newTodoInputValue = (event) => {
    setNewTodoValue(event.target.value)
  }

  const clickEfect = () => {
    setHover(true);
    setTimeout(() => {
      setHover(false)
    },100);
  }

    return (
      <form onSubmit={onSubmit}>
        <label  className="newTodoContainer">
          <input
          className={`newTodoContainer__button ${hover && 'check'}`}
          onClick={clickEfect} 
          onMouseLeave={() => {setHover(false)}}
          type="submit" 
          value="" 
          />
          
          <input
          type="text"
          onChange={newTodoInputValue}
          value={newTodoValue}
          placeholder="Create a new TODO" 
          className="newTodoContainer__input"
          />
          
        </label>
      </form>

    );
}
export { NewTodo };