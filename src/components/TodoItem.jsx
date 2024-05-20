const TodoItem = ({ todo, setTodos }) => {
  const { id, title, content, isDone } = todo;

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    alert("삭제된 내용은 복구가 어렵습니다");
  };
  const toggleTodo = () => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <div>
        <button onClick={deleteTodo}>삭제</button>
        <button onClick={toggleTodo}>{isDone ? "취소" : "완료"}</button>
      </div>
    </div>
  );
};

export default TodoItem;
