import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

const db = [];

function App() {
  const [data, setData] = useState(db);

  const handleAdd = (text) => {
    db.push(text);

    setData([...db]);

    console.log(text);
  };

  const handleDelete = (idx) => {
    db.splice(idx, 1);

    setData([...db]);

    console.log(idx);
  };

  useEffect(() => {
    console.log("Parent useEffect");
  }, []);

  return (
    <div className="App">
      <TodoList
        todos={data}
        onAdd={(text) => handleAdd(text)}
        onDelete={(idx) => handleDelete(idx)}
      />
    </div>
  );
}

export default App;
