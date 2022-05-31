import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

function CompletedItem({ singleToDo, updateToDo }) {
  return (
    <div
      className={singleToDo.completed ? 'todo-row complete' : 'todo-row'}
      style={singleToDo.important ? { background: 'orange' } : {}}
    >
      {singleToDo.text}
      <div className="iconsContainer">
        <RiCloseCircleLine
          className="icon"
          onClick={() => updateToDo(singleToDo.id)}
        />
      </div>
    </div>
  );
}

export default CompletedItem;
