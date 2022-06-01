import './App.css';
import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoItem from './components/ToDoItem';

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
  1.) ConstaskIder adding global css file with basic configuration in place
    - Check for comfort level changing styles
  2.) How do we determine the level of candtaskIdate?
    –
*/

export default function App() {
  const [toDos, setToDos] = useState([]);
  const [taskId, setTaskId] = useState(1);

  const addToDo = (text) => {
    setTaskId(taskId + 1);
    const singleToDo = { id: taskId, text: text, completed: false };
    const newToDos = [...toDos, singleToDo];

    setToDos(newToDos);
  };

  const onUpdateToDo = (id) => {
    const updatedTodos = toDos.map((todo) => {
      if (todo.id === id) {
        const temp = todo;
        temp.completed = !temp.completed;
      }
      return todo;
    });
    setToDos(updatedTodos);
  };

  const removeToDo = (id) => {
    const updatedTodos = [...toDos].filter((todo) => todo.id !== id);
    setToDos(updatedTodos);
  };
  return (
    <div className="todo-app">
      <h1>Hello ToDo List</h1>
      <ToDoForm onAddToDo={addToDo} />
      {toDos.map((singleToDo) => (
        <ToDoItem
          onUpdateToDo={onUpdateToDo}
          removeToDo={removeToDo}
          singleToDo={singleToDo}
          key={singleToDo.id}
        />
      ))}
    </div>
  );
}
