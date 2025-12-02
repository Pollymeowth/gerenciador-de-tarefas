import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();
export const useTask = () => useContext(TaskContext);

export function TaskProvider({ children }) {
  const [categories, setCategories] = useState(() => {
    const raw = localStorage.getItem("categories");
    return raw ? JSON.parse(raw) : [];
  });

  const [tasks, setTasks] = useState(() => {
    const raw = localStorage.getItem("tasks");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(
    () => localStorage.setItem("categories", JSON.stringify(categories)),
    [categories]
  );
  useEffect(
    () => localStorage.setItem("tasks", JSON.stringify(tasks)),
    [tasks]
  );

  function addCategory(name) {
    if (!name.trim()) return;
    setCategories((prev) => [...prev, { id: uuidv4(), name }]);
  }

  function addTask(categoryId, text) {
    if (!text.trim()) return;
    setTasks((prev) => [
      ...prev,
      { id: uuidv4(), categoryId, text, done: false },
    ]);
  }

  function toggleTaskDone(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function updateTask(id, newText) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  }

  return (
    <TaskContext.Provider
      value={{
        categories,
        tasks,
        addCategory,
        addTask,
        toggleTaskDone,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
