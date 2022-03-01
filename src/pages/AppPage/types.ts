export default interface ComponentProps {
  username: string;
  filter: Filter;
  handleComplete: (id: number) => void;
  handleChangeFilter: (filter: Filter) => () => void;
  handleLogout: () => void;
}

export type Filter = "clear" | "all" | "active" | "completed";
