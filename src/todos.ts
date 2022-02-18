export const todos: Todo[] = [
  { id: 0, name: "Jog around the park", active: false },
  { id: 1, name: "10 minutes meditation", active: true },
  { id: 2, name: "Read for 1 hour", active: true },
  { id: 3, name: "Pick up groceries", active: false },
  { id: 4, name: "Complete Todo App", active: true },
];

export type Todo = {
  id: number;
  name: string;
  active: boolean;
};
