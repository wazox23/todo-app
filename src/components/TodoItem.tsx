import React from "react";

interface Props {
  todo: { text: string; completed: boolean };
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (newText: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newText, setNewText] = React.useState(todo.text);

  const handleEdit = () => {
    onEdit(newText);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleEdit();
    }
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-around align-items-center fw-bold ${
        todo.completed ? "bg-success" : "bg-danger"
      }`}
    >
      {isEditing ? (
        <div className="d-flex w-100 justify-content-between">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleEdit}
            onKeyPress={handleKeyPress}
            className="form-control"
          />
          <button onClick={handleEdit} className="btn btn-primary ml-auto">
            ✓
          </button>
        </div>
      ) : (
        <div className="w-100 d-flex justify-content-around align-items-center">
          <div className="form-check form-switch custom-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={todo.completed}
              onChange={onToggle}
              id={`todo-switch-${todo.text}`}
            />
            <label
              className="form-check-label"
              htmlFor={`todo-switch-${todo.text}`}
            ></label>
          </div>

          <span className="flex-grow-1 text-center">{todo.text}</span>
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-secondary btn-sm m-2"
          >
            Edit
          </button>
          <button onClick={onDelete} className="btn btn-danger btn-sm">
            ✕
          </button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
