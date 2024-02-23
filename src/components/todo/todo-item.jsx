import React from "react";

const TodoItem = ({ title, done, id, removeTask }) => {
  return (
    <div className="task-item">
      <input type="checkbox" defaultChecked={done} />
      <span>{title}</span>
      <button onClick={() => removeTask(id)}>delete</button>
    </div>
  );
};

export default TodoItem;