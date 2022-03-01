import { Filter } from "pages/AppPage/types";

export default interface Props {
  filter: Filter;
  onChangeFilter: (filter: Filter) => () => void;
}
export default interface ComponentProps {
  isActive?: any;
  activeTodosLength?: number;
  onChangeFilter: (filter: Filter) => () => void;
  handleLogout?: () => void;
}
