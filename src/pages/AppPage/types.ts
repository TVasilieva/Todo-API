import { Account } from "models/user";

export default interface ComponentProps {
  account: Account | null;
  filter: Filter;
  activeTodoLength: number;
  handleComplete: (id: number) => void;
  handleChangeFilter: (filter: Filter) => () => void;
  handleLogout: () => void;
}

export type Filter = "clear" | "all" | "active" | "completed";
