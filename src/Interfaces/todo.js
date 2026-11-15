export const createTodoItem = (text) => ({
  id: Date.now(),
  text: text,
  completed: false,
});