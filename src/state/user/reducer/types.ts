import { Account, User } from "models/user";

export interface UserReducer {
  account: User | null;

  account2: Account | null;
  accountIsLoading: boolean;
  accountError: string | null;
}
