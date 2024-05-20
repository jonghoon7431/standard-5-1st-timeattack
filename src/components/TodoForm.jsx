const TodoForm = ({ setTodos }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };
    if (!title.trim() || !content.trim()) return alert("제목과 내용을 모두 입력해주세요");
    setTodos((prev) => [nextTodo, ...prev]);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>제목: </label>
      <input type="text" placeholder="제목" name="title" />
      <label>내용: </label>
      <input type="text" placeholder="내용" name="content" />
      <button className="submit_button">등록</button>
    </form>
  );
};

export default TodoForm;
