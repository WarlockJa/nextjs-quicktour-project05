import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

// equal to setting fetch cache to no-cache
export const revalidate = 0;

export default function Home() {
  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
}
