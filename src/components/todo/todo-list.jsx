import React from "react";
import "./todo-list.css";
import TodoAdd from "./todo-add";
import TodoFilter from "./todo-filter";
import TodoItem from "./todo-item";

const list = [
  {
    id: 1,
    title: "Work",
    done: true,
  },
  {
    id: 2,
    title: "Shop",
    done: false,
  },
  {
    id: 3,
    title: "Gym",
    done: false,
  },
];

const TodoList = () => {
  return (
    <div className="container">
      <h1 style={{ color: "dodgerblue" }}>ToDo List</h1>

      <div className="todo-list">
        <TodoAdd />
        <TodoFilter />

        <div>
          {list.map((task) => (
            <TodoItem {...task} key={task.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;

