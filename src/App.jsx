import { useState } from "react";
import Layout from "./components/Layout";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "title",
      content: "content",
      isDone: false,
    },
  ]);
  const workingTodo = todos.filter((todo) => !todo.isDone);
  const doneTodo = todos.filter((todo) => todo.isDone);
  return (
    <Layout>
      <h1>투두리스트 타임어택</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todo={workingTodo} statusTodo="working.." setTodos={setTodos} />
      <TodoList todo={doneTodo} statusTodo="done!" setTodos={setTodos} />
    </Layout>
  );
}
