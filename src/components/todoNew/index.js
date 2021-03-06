import React from "react";


function NewTodo ({newTodoValue, setNewTodoValue, addTodo, loading}) {
  const [hover, setHover] = React.useState(false);
  const [click, setClick] = React.useState(false);
  

  
  const onSubmit = (event) => {
    event.preventDefault()
    !!newTodoValue ? addTodo(newTodoValue) : console.log('no info')
    setNewTodoValue('')
  }
 

  const newTodoInputValue = (event) => {
    setNewTodoValue(event.target.value)
  }
    return (
      <form onSubmit={onSubmit}>
        <label  className="newTodoContainer">
          <input
          className={`newTodoContainer__button ${(click) && 'check'} ${(hover && !click) && 'buttonHover'} `}
          onClick={() => {
            setClick(true);
            setTimeout(()=> setClick(false),500)}
            } 
          onMouseEnter={() => {setHover(true)}}
          onMouseLeave={() => {setHover(false)}}
          type="submit" 
          value="" 
          disabled={loading}
          />
          
          <input
          type="text"
          onChange={newTodoInputValue}
          value={newTodoValue}
          placeholder="create a new To-Do "
          className="newTodoContainer__input"
          disabled={loading}
          />
          
        </label>
      </form>

    );
}
export { NewTodo };