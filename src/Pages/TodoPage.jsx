import { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { createTodoItem } from '../Interfaces/todo';

function TodoPage() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [text, setText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (isEditing) {
      setTodos(
        todos.map((todo) =>
          todo.id === currentTodoId ? { ...todo, text: text } : todo
        )
      );
      setIsEditing(false);
      setCurrentTodoId(null);
    } else {
      const newTodo = createTodoItem(text);
      setTodos([newTodo, ...todos]);
    }
    setText('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodoId(todo.id);
    setText(todo.text);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentTodoId(null);
    setText('');
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div
      className="w-100 min-vh-100 d-flex align-items-center justify-content-center py-5 m-0"
      style={{
        background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        fontFamily: "'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              
              {/* Başlık */}
              <div className="card-header bg-white text-center border-0 pt-4 pb-2">
                <div className="d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-10 text-danger p-3 rounded-circle mb-3">
                  <i className="bi bi-stars fs-1"></i>
                </div>
                <h3 className="fw-bold text-dark mb-1">To-Do List</h3>
                <p className="text-muted small">Günlük görevlerini kolayca planla ve yönet</p>
              </div>

              <div className="card-body p-4">
                {/* Form Bileşeni */}
                <TodoForm
                  text={text}
                  setText={setText}
                  handleSubmit={handleSubmit}
                  isEditing={isEditing}
                  handleCancelEdit={handleCancelEdit}
                />

                {/* Filtre Sekmeleri */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="btn-group btn-group-sm w-100" role="group">
                    <button
                      className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-secondary'}`}
                      onClick={() => setFilter('all')}
                    >
                      Hepsini Gör ({todos.length})
                    </button>
                    <button
                      className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-outline-secondary'}`}
                      onClick={() => setFilter('active')}
                    >
                      Devam Eden ({todos.length - completedCount})
                    </button>
                    <button
                      className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-outline-secondary'}`}
                      onClick={() => setFilter('completed')}
                    >
                      Tamamlanan ({completedCount})
                    </button>
                  </div>
                </div>

                {/* Liste Bileşeni */}
                <TodoList
                  filteredTodos={filteredTodos}
                  toggleComplete={toggleComplete}
                  handleEditClick={handleEditClick}
                  handleDelete={handleDelete}
                />
              </div>

              {/* Alt Bilgi */}
              <div className="card-footer bg-light text-center py-3 border-0">
                <small className="text-muted">
                  Tamamlanan: <strong>{completedCount}</strong> / {todos.length} Görev
                </small>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoPage;