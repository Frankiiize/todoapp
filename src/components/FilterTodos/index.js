import React from "react";

function FilterTodos (
  {
    unCompletedTodos,
    onAllTodos,
    onActiveTodos,
    onCompleteTodos,
    onClearComplete,
  }
){

    

    return (
    <>
        <div className="todoCounter"> 
          <span>{unCompletedTodos} Items left </span>
          <span className="todoCounter__clearComplete" onClick={onClearComplete}>Clear Completed</span>
        </div>

        <section className="filterContainer">
          <p onClick={onAllTodos}>All</p>
          <p onClick={onActiveTodos}>Active</p>
          <p onClick={onCompleteTodos}>Complete</p>
        </section>
    </>
    );
}

export { FilterTodos };