import { useState } from "react";
import TodoItem from "./TodoItem";

export default function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto" }}>
      <h2>Todo List</h2>

      <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tambah todo..."
        />
        <button onClick={addTodo}>Tambah</button>
      </div>

      {todos.length === 0 ? (
        <p style={{ color: "gray" }}>Belum ada todo.</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo}
            onDelete={() => deleteTodo(index)}
          />
        ))
      )}
    </div>
  );
}
