import TodoItem from "./TodoItem";

const TodoList = ({ todo, statusTodo, setTodos }) => {
  return (
    <div>
      <h2>{statusTodo}</h2>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            <TodoItem setTodos={setTodos} todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
