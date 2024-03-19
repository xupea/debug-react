import { useEffect, useState } from "react";

const container = {
  width: 300,
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const list = { display: "flex", flexDirection: "column", gap: 10 };

const item = {
  flex: 1,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};

const TodoList = ({ todos, onAdd, onDelete }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("todo list useEffect");
  }, []);

  return (
    <div style={container}>
      <div style={{ display: "flex" }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="type a todo"
          style={{ flex: 1 }}
        />
        <button
          onClick={() => {
            onAdd(text);
            setText("");
          }}
        >
          Add
        </button>
      </div>

      <div style={list}>
        {todos.map((d, idx) => {
          return (
            <div
              key={d}
              style={{
                display: "flex",
              }}
            >
              <div style={item}>{d}</div>
              <button onClick={() => onDelete(idx)}>Done</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
