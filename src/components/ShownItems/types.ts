import { Filter } from "../../pages/AppPage/types";

export default interface ComponentProps {
  filter: Filter;
  activeTodoLength: number;
  onChangeFilter: any;
  // showAll: () => void;
  // showActive: () => void;
  // showCompleted: () => void;
}
