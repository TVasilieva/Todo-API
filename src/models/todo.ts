export interface Todo {
  id: number;
  name: string;
  active: boolean;
}

export interface Todo2 {
  id: number;
  listOfTodos: Todo[];
}
