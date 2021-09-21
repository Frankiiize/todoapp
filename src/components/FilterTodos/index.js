import React from "react";

function FilterTodos ({totalTodos, unCompletedTodos}) {
 
    return (
    <>
        <div className="todoCounter"> 
          <span>{unCompletedTodos} Items left </span>
          <span>Clear Completed</span>
        </div>

        <section className="filterContainer">
          <p>All</p>
          <p>Active</p>
          <p>Complete</p>
        </section>
    </>
    );
}

export { FilterTodos };