import { User } from "models/user";

export interface UserReducer {
  account: User | null;
}
