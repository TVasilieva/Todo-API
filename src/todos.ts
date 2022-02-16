export const todos: Todos[] = [
  { id: 0, name: "Jog around the park", state: "completed" },
  { id: 1, name: "10 minutes meditation", state: "active" },
  { id: 2, name: "Read for 1 hour", state: "active" },
  { id: 3, name: "Pick up groceries", state: "completed" },
  { id: 4, name: "Complete Todo App", state: "active" },
];

export type Todos = {
  id: number;
  name: string;
  state: "completed" | "active";
};
