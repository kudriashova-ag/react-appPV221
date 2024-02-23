import React from "react";

const TodoItem = ({title, done, id}) => {
  
  return (
    <div className="task-item">
      <input type="checkbox" defaultChecked={done} />
      <span>{title}</span>
      <button>delete</button>
    </div>
  );
};

export default TodoItem;