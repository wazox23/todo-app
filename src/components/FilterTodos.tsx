import React from "react";
import "../styles/FilterTodos.css";

interface Props {
  filter: "all" | "completed" | "uncompleted";
  setFilter: React.Dispatch<
    React.SetStateAction<"all" | "completed" | "uncompleted">
  >;
}

const FilterTodos: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <div className="filter-container d-flex justify-content-center mb-3">
      <div className="btn-group" role="group" aria-label="Filter todos">
        <button
          onClick={() => setFilter("all")}
          className={`btn ${
            filter === "all" ? "btn-primary" : "btn-outline-primary"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`btn ${
            filter === "completed" ? "btn-primary" : "btn-outline-primary"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("uncompleted")}
          className={`btn ${
            filter === "uncompleted" ? "btn-primary" : "btn-outline-primary"
          }`}
        >
          Uncompleted
        </button>
      </div>
    </div>
  );
};

export default FilterTodos;
