import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const TodoApp = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default TodoApp;