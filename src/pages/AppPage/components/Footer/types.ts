import { Filter } from "pages/AppPage/types";

export default interface Props {
  filter: Filter;
  onChangeFilter: (filter: Filter) => () => void;
  isLoading?: boolean;
  completedTodosLength?: number;
}
export default interface ComponentProps {
  isActive?: any;
  activeTodosLength?: number;
  onChangeFilter: (filter: Filter) => () => void;
  handleLogout?: () => void;
}
