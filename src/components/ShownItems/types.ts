import { Filter } from "../../pages/AppPage/types";

export default interface ComponentProps {
  activeTodoLength: number;
  onChangeFilter: (filter: Filter) => () => void;
}
