export default async function fetchTodos() {
  try {
    // has no no-cache option because we're setting it in src/app/page.tsx as revalidate = 0
    const res = await fetch(`http://127.0.0.1:3500/todos`);
    const todos: Todo[] = await res.json();

    return todos;
  } catch (error) {
    return null;
  }
}
