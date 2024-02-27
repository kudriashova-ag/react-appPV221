import classNames from "classnames";
import React, { useState } from "react";

const TodoItem = ({ title, done, id, removeTask, toggleDone, updateTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const saveTask = (e) => {
    if (newTitle.trim().length === 0) {
      setIsEdit(false);
      setNewTitle(title);
      return;
    }

    if (e.code === "Enter") {
      updateTask(id, newTitle);
      setIsEdit(false);
    }
  };

  const normalTemplate = (
    <span
      className={classNames({ "task-done": done })}
      onClick={() => setIsEdit(true)}
    >
      {title}
    </span>
  );

  const editTemplate = (
    <input
      onKeyDown={saveTask}
      value={newTitle}
      onChange={(e) => setNewTitle(e.target.value)}
    />
  );

  return (
    <div className="task-item">
      <input
        type="checkbox"
        defaultChecked={done}
        onClick={() => toggleDone(id)}
      />

      {isEdit ? editTemplate : normalTemplate}

      <button onClick={() => removeTask(id)}>delete</button>
    </div>
  );
};

export default TodoItem;
