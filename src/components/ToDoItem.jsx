import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { RiCloseCircleLine } from 'react-icons/ri';

export default function ToDoItem({ singleToDo, onUpdateToDo, removeToDo }) {
  return (
    <div className={singleToDo.completed ? 'todo-row complete' : 'todo-row'}>
      {singleToDo.id}.{singleToDo.text}
      <div className="iconsContainer">
        <BiCheckCircle
          className="icon"
          onClick={() => onUpdateToDo(singleToDo.id)}
        />
        <RiCloseCircleLine
          className="icon"
          onClick={() => removeToDo(singleToDo.id)}
        />
      </div>
    </div>
  );
}
