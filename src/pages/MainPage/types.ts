import { User } from "user";

export default interface ComponentProps extends StateProps {}

export interface StateProps {
  user: User | null;
}
