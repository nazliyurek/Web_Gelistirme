function TodoForm({ text, setText, handleSubmit, isEditing, handleCancelEdit }) {
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group input-group-lg shadow-sm rounded-3 overflow-hidden border">
        <input
          type="text"
          className="form-control border-0 px-3 fs-6"
          placeholder={isEditing ? 'Görevi düzenleyin...' : 'Yeni bir görev ekleyin...'}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {isEditing && (
          <button
            type="button"
            className="btn btn-light border-0 text-muted btn-action"
            onClick={handleCancelEdit}
            title="İptal Et"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        )}
        <button
          className={`btn border-0 px-4 fw-semibold btn-action ${
            isEditing ? 'btn-warning text-white' : 'btn-primary'
          }`}
          type="submit"
        >
          {isEditing ? (
            <>
              <i className="bi bi-pencil-square me-2"></i>Güncelle
            </>
          ) : (
            <>
              <i className="bi bi-plus-lg me-2"></i>Ekle
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;