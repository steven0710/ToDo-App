import './App.css';
import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoItem from './components/ToDoItem';
import CompletedForm from './components/CompletedForm';
import CompletedItem from './components/CompletedItem';

/**
 * This App should:
 *  - Input a task
 *  - Add the task to a list
 *  - Display the list of tasks
 *  - Allow for completing a task
 *  - Allow for deleting a task
 *  - Add Completed tasks to a done list
 *create a to-do container
 * Extras:
 *  - Style the App
 *  - Edit an existing task
 */

/*
  TODO:

  1.) Consider adding global css file with basic configuration in place
    - Check for comfort level changing styles
  2.) How do we determine the level of candidate?
    –
*/

export default function App() {
  const [toDosState, setToDosState] = useState([]);

  const [completedState, setCompletedState] = useState([]);

  const [idState, setIdState] = useState(1);

  const updateToDo = (id) => {
    const updatedToDos = [...toDosState].filter((todo) => todo.id !== id);
    // will create new array where id is not equal to
    // todo is the n th iteration in the array, will
    // iterate every every element in the array
    const updatedComplete = [...toDosState].filter((todo) => todo.id === id);

    const singleComplete = {
      ...updatedComplete[0],
      completed: !updatedComplete[0].completed,
    };
    console.log(updatedComplete);
    console.log(updatedToDos);
    setToDosState(updatedToDos);

    const TotalUpdatedComplete = [...completedState, singleComplete];
    console.log(TotalUpdatedComplete);
    setCompletedState(TotalUpdatedComplete);
  };

  const updateComplete = (id) => {
    const completedTodos = [...completedState].filter((todo) => todo.id !== id);
    // will create new array where id is not equal to
    // todo is the n th iteration in the array, will
    // iterate every every element in the array
    const updatedComplete = [...completedState].filter(
      (todo) => todo.id === id,
    );

    const singleComplete = {
      ...updatedComplete[0],
      completed: !updatedComplete[0].completed,
    };
    setCompletedState(completedTodos);

    const todoList = [...toDosState, singleComplete];
    setToDosState(todoList);
  };

  const addToDo = (text) => {
    setIdState(idState + 1);

    const singleToDo = { id: idState, text: text, completed: false };
    const newToDos = [...toDosState, singleToDo];
    // console.log(newToDos)
    setToDosState(newToDos);
    // console.log(newToDos)
  };
  return (
    <div className="todo-app">
      <h1>Hello ToDo List</h1>
      <ToDoForm addToDo={addToDo} />
      {toDosState.map((singleToDo) => (
        <ToDoItem
          updateToDo={updateToDo}
          singleToDo={singleToDo}
          key={singleToDo.id}
        />
      ))}
      <h1>Completed Tasks</h1>
      <CompletedForm updateToDo={updateToDo} />
      {completedState.map((singleToDo) => (
        <CompletedItem
          updateToDo={updateComplete}
          singleToDo={singleToDo}
          key={singleToDo.id}
        />
      ))}
    </div>
  );
}
