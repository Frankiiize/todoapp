import React from "react";

import { Header  } from '../Header';
import { NewTodo } from '../todoNew';
import { TodosList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { FilterTodos } from '../FilterTodos';
import { Footer } from '../Footer';

function AppUi({
  newTodoItem,
  setNewTodoItem,

 
  unCompletedTodos,
  totalTodos,
  completeTodo,
  deleteTodo,
  deleteClear,
  completeTodos,
  activeTodos,
  allTodos,
  todos,
}) {
  return (
    <>
    <Header />

    <NewTodo
      newTodoItem={newTodoItem}
      setNewTodoItem={setNewTodoItem}
    />

    <TodosList>
      {todos.map((todo)=>(
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onCompleteTodo={() => completeTodo(todo.text)}
          onDelete= {() => deleteTodo(todo.text) }
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
  </>
  );
}

export { AppUi };