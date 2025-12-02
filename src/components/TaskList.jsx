import { useTask } from "../context/TaskContext";
import { useState } from "react";

export default function TaskList({ categoryId }) {
  const { tasks, toggleTaskDone, deleteTask, updateTask } = useTask();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const list = tasks.filter((t) => t.categoryId === categoryId);

  function startEditing(task) {
    setEditingId(task.id);
    setEditText(task.text);
  }

  function saveEdit(id) {
    updateTask(id, editText);
    setEditingId(null);
  }

  if (list.length === 0) return <p>Sem tarefas.</p>;

  return (
    <ul>
      {list.map((t) => (
        <li key={t.id} className="task-item">
          <div className="task-left">
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggleTaskDone(t.id)}
            />

            {editingId === t.id ? (
              <input
                className="task-edit-input"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span
                className="task-text"
                style={{
                  textDecoration: t.done ? "line-through" : "none",
                  opacity: t.done ? 0.6 : 1,
                }}
              >
                {t.text}
              </span>
            )}
          </div>

          <div className="task-buttons">
            {editingId === t.id ? (
              <>
                <button onClick={() => saveEdit(t.id)}>Salvar</button>
                <button onClick={() => setEditingId(null)}>Cancelar</button>
              </>
            ) : (
              <>
                <button className="edit-btn" onClick={() => startEditing(t)}>
                  Editar
                </button>
                <button className="delete-btn" onClick={() => deleteTask(t.id)}>
                  Excluir
                </button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
