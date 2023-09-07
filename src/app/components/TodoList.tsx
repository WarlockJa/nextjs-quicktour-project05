import fetchTodos from "../../lib/fetchTodos";
import Todo from "./Todo";
import { notFound } from "next/navigation";

export default async function TodoList() {
  const todos = await fetchTodos();

  if (!todos) notFound();

  const sortedTodos = todos.reverse();

  const content = (
    <>
      {sortedTodos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );

  return content;
}
