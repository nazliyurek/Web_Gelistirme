function TodoList({ filteredTodos, toggleComplete, handleEditClick, handleDelete }) {
  if (filteredTodos.length === 0) {
    return (
      <div className="text-center text-muted py-5 border-top">
        <i className="bi bi-inbox fs-1 d-block mb-2 text-secondary opacity-50"></i>
        <span>Henüz bu kategoride gösterilecek bir görev yok.</span>
      </div>
    );
  }

  return (
    <ul className="list-group list-group-flush border-top">
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center py-3 px-3 border-bottom animated-item ${
            todo.completed ? 'bg-light text-muted' : ''
          }`}
          style={{ transition: 'all 0.2s ease' }}
        >
          <div className="d-flex align-items-center me-3" style={{ cursor: 'pointer' }}>
            <input
              type="checkbox"
              className="form-check-input me-3 fs-5"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              style={{ cursor: 'pointer' }}
            />
            <span
              className={`fs-6 ${
                todo.completed ? 'text-decoration-line-through text-muted' : 'fw-medium text-dark'
              }`}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.text}
            </span>
          </div>

          <div className="d-flex gap-1">
            <button
              className="btn btn-sm btn-light text-warning border-0 btn-action"
              onClick={() => handleEditClick(todo)}
              title="Düzenle"
            >
              <i className="bi bi-pencil fs-6"></i>
            </button>
            <button
              className="btn btn-sm btn-light text-danger border-0 btn-action"
              onClick={() => handleDelete(todo.id)}
              title="Sil"
            >
              <i className="bi bi-trash fs-6"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;