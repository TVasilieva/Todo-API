import { Filter } from "../../types";

export default interface ComponentProps {
  activeTodoLength: number;
  onChangeFilter: (filter: Filter) => () => void;
  filter: Filter;
}
