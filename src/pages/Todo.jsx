import React, { useEffect, useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => setTodos(todos))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="Posts">
      <h2>Hello, here are the Todos</h2>
      <table className="posts-table">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, index) => (
            <tr key={index}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed ? "Completed" : "Not Completed"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Todo;
