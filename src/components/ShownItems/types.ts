import { Todos } from "../../todos";

export default interface ComponentProps {
  todos: Todos[];
  showAll: () => void;
  showActive: () => void;
  showCompleted: () => void;
}
