import { Account } from "models/user";

export interface UserReducer {
  account: Account | null;
  accountIsLoading: boolean;
  accountError: string | null;
  username: string;
}
