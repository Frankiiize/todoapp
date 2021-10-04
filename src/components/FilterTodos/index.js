import React from "react";

function FilterTodos (
  {
    unCompletedTodos,
    onAllTodos,
    onActiveTodos,
    onCompleteTodos,
    onClearComplete,
    device,
  }
){
  const [allActive, setAllActive] = React.useState(true);
  const [activeTodos, setActiveTodos] = React.useState(false);
  const [completeTodos, setCompleteTodos] = React.useState(false);

  const clickAllTodos = () => {
    setAllActive(!allActive);
    setActiveTodos(false)
    setCompleteTodos(false)
    onAllTodos();
  }
  const clickActiveTodos = () => {
    setActiveTodos(!activeTodos);
    setAllActive(false)
    setCompleteTodos(false)
    onActiveTodos();
  }

  const clickCompleteTodos = () =>{
    setCompleteTodos(!completeTodos);
    setAllActive(false)
    setActiveTodos(false)
    onCompleteTodos();
  }
    

    return (
    <>
      {device 
      ?<>
        <div className="todoCounter"> 
          <span>{unCompletedTodos} Items left </span>
          <span className="todoCounter__clearComplete" onClick={onClearComplete}>Clear Completed</span>       
        </div>
        <section className="filterContainer">
          <p onClick={clickAllTodos} className={`filterContainer__text ${allActive && 'filterContainer__text__active'}`}>All</p>
          <p onClick={clickActiveTodos} className={`filterContainer__text ${activeTodos && 'filterContainer__text__active'}`} >Active</p>
          <p onClick={clickCompleteTodos}  className={`filterContainer__text ${completeTodos && 'filterContainer__text__active'}`}>Complete</p>
        </section>
        </>
        :<>
        <div className="todoCounter"> 
          <span>{unCompletedTodos} Items left </span>
          <div className="todoCounter__filter">
          <p onClick={clickAllTodos} className={`filterContainer__text ${allActive && 'filterContainer__text__active'}`}>All</p>
          <p onClick={clickActiveTodos} className={`filterContainer__text ${activeTodos && 'filterContainer__text__active'}`} >Active</p>
          <p onClick={clickCompleteTodos}  className={`filterContainer__text ${completeTodos && 'filterContainer__text__active'}`}>Complete</p>
          </div>
          <span className="todoCounter__clearComplete" onClick={onClearComplete}>Clear Completed</span>       
        </div>
        </> }
        
    </>
    );
}

export { FilterTodos };