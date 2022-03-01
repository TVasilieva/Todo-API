import { Filter } from "pages/AppPage/types";

export default interface Props {
  filter: Filter;
  activeTodoLength: number;
  onChangeFilter: (filter: Filter) => () => void;
}
export default interface ComponentProps {
  isActive?: any;
  activeTodoLength: number;
  onChangeFilter: (filter: Filter) => () => void;
  handleLogout?: () => void;
}
