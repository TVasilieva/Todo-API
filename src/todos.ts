export const todos: Todos[] = [
  { id: 0, name: "Jog around the park", status: "completed" },
  { id: 1, name: "10 minutes meditation", status: "active" },
  { id: 2, name: "Read for 1 hour", status: "active" },
  { id: 3, name: "Pick up groceries", status: "completed" },
  { id: 4, name: "Complete Todo App", status: "active" },
];

export type Todos = {
  id: number;
  name: string;
  status: "completed" | "active";
};
