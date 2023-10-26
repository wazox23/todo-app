import React, { useState } from "react";
import TodoItem from "./TodoItem";
import FilterTodos from "./FilterTodos";

interface Todo {
  text: string;
  completed: boolean;
}

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  const [filter, setFilter] = useState<"all" | "completed" | "uncompleted">(
    "all"
  );

  const filteredTodos = todos.filter((todo) =>
    filter === "completed"
      ? todo.completed
      : filter === "uncompleted"
      ? !todo.completed
      : true
  );

  const handleToggle = (index: number) => {
    const newTodos = todos.slice();
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDelete = (index: number) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const handleEdit = (index: number, newText: string) => {
    const newTodos = todos.slice();
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const uncompletedTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div>
      <FilterTodos filter={filter} setFilter={setFilter} />
      <div className="text-center text-danger mb-3 fw-bold fs-5">
        Uncompleted tasks:
        <span className="badge bg-danger">{uncompletedTodosCount}</span>{" "}
      </div>
      <div className="text-center mb-3">
        <button
          className="btn btn-outline-danger"
          onClick={handleClearCompleted}
        >
          Clear Completed
        </button>
      </div>
      <ul className="list-group">
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onToggle={() => handleToggle(index)}
            onDelete={() => handleDelete(index)}
            onEdit={(newText) => handleEdit(index, newText)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
