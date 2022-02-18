import { Todo, todos } from "todos";

export type User = {
  id: number;
  username: string;
  password: string;
  email: string;
  todos: Todo[];
};

export const users = [
  {
    id: 8,
    username: "Eric Cartman",
    password: "11111111",
    email: "eric_cool@yahoo.com",
    todos: todos,
  },
  {
    id: 9,
    username: "Kyle Broflifski",
    password: "11111111",
    email: "kyl@gmail.com",
    todos: [],
  },
  {
    id: 10,
    username: "Butters Stotch",
    password: "11111111",
    email: "chaos@mail.ru",
    todos: [],
  },
];
