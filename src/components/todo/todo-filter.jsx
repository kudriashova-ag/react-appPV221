import classNames from "classnames";
import React from "react";

const TodoFilter = ({ setFilter, filterMap, activeFilter }) => {
  const filterKeys = Object.keys(filterMap); // ['All', 'Done', 'ToDo']

  return (
    <div>
      {filterKeys.map((filterName) => (
        <button
          key={filterName}
          onClick={() => setFilter(filterName)}
          className={classNames({ active: filterName === activeFilter })}
        >
          {filterName}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
