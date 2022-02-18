import { Filter } from "models/filter";
import { User } from "models/user";

export default interface ComponentProps {
  account: User | null;
  filter: Filter;
  activeTodoLength: number;
  handleComplete: (id: number) => void;
  handleChangeFilter: (filter: Filter) => () => void;
  handleLogout: () => void;
}
