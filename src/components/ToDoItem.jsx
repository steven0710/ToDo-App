import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';

function ToDoItem({ singleToDo, updateToDo }) {
  return (
    <div
      className={singleToDo.completed ? 'todo-row complete' : 'todo-row'}
      style={singleToDo.important ? { background: 'orange' } : {}}
    >
      {singleToDo.text}
      <div className="iconsContainer">
        <BiCheckCircle
          className="icon"
          onClick={() => updateToDo(singleToDo.id)}
        />
      </div>
    </div>
  );
}

export default ToDoItem;
