import React from "react";

function FilterTodos (
  {
    unCompletedTodos,
    onAllTodos,
    onActiveTodos,
    onCompleteTodos,
    onClearComplete,
    loading,
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
      <section className={`filterContainer ${loading && "filterContainer-loading"}`}>
        <span className="filterContainer__itemsLeft">{unCompletedTodos} Items left </span>
        <div className="filterContainer__clearBtn">
          <button onClick={onClearComplete}>clear completed</button>
        </div>

        <div className="filterContainer__space"></div>
        <div className="filterContainer__filterBtn">
          <button disabled={loading}  onClick={clickAllTodos} className={`filterContainer__filterBtn__btn ${allActive && "filterContainer__filterBtn__active" }`}>all</button>
          <button disabled={loading}  onClick={clickActiveTodos} className={`filterContainer__filterBtn__btn ${activeTodos && "filterContainer__filterBtn__active"}`}>active</button>
          <button disabled={loading} onClick={clickCompleteTodos}className={`filterContainer__filterBtn__btn ${completeTodos && "filterContainer__filterBtn__active"}`}>completed</button>
        </div>
      </section>   
    </>
    );
}

export { FilterTodos };