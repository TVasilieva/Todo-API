import { Todos } from "../../todos";

export default interface ComponentProps {
  todo: Todos;
  setShownTodos:any;
  todos: Todos[]
}
