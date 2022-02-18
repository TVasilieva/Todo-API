import { User } from "models/user";

export default interface ComponentProps {
  account: User | null;
  openLoginModal: () => void;
}
