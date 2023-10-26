// src/components/AddTodo.tsx

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AddTodo.css";

interface Props {
  addTodo: (text: string) => void;
}

const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form mx-auto mb-3 mt-3">
      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
          placeholder="Enter new todo"
        />
        <div>
          <button
            type="submit"
            className="btn btn-primary rounded-circle add-button mx-1"
          >
            <span className="plus-icon">+</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
