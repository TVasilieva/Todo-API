import { Todo } from "models/todo";

export const todos: Todo[] = [
  { id: "0", name: "Jog around the park", active: false },
  { id: "1", name: "10 minutes meditation", active: true },
  { id: "2", name: "Read for 1 hour", active: true },
  { id: "3", name: "Pick up groceries", active: false },
  { id: "4", name: "Complete Todo App", active: true },
];

export const todos2: any = [
  {
    id: 8,
    listOfTodos: [
      { id: 121, name: "Jog around the park", active: false },
      { id: 122, name: "10 minutes meditation", active: true },
      { id: 120, name: "Read for 1 hour", active: true },
      { id: 127, name: "Pick up groceries", active: false },
      { id: 128, name: "Complete Todo App", active: true },
    ],
  },
  {
    id: 9,
    listOfTodos: [
      { id: 131, name: "Jog around the park", active: false },
      { id: 132, name: "10 minutes meditation", active: true },
    ],
  },
  {
    id: 10,
    listOfTodos: [
      { id: 411, name: "Jog around the park", active: false },
      { id: 142, name: "10 minutes meditation", active: true },
      { id: 140, name: "Read for 1 hour", active: true },
      { id: 141, name: "Pick up groceries", active: false },
      { id: 124, name: "Complete Todo App", active: true },
    ],
  },
  {
    id: 11,
    listOfTodos: [
      { id: 151, name: "Jog around the park", active: false },
      { id: 151, name: "Pick up groceries", active: false },
      { id: 125, name: "Complete Todo App", active: true },
    ],
  },
  {
    id: 12,
    listOfTodos: [{ id: 161, name: "Jog around the park", active: false }],
  },
];
