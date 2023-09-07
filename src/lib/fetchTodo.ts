export default async function fetchTodo(id: string) {
  // has no no-cache option because we're setting it in src/app/page.tsx as revalidate = 0
  const res = await fetch(`http://127.0.0.1:3500/todos/${id}`);

  if (!res.ok) return undefined;

  const todo: Todo = await res.json();

  return todo;
}
