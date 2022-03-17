import { Filter } from "pages/AppPage/types";

export default interface Props {
  filter: Filter;
  onChangeFilter: (filter: Filter) => () => void;
}
