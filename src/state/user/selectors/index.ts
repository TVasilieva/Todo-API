import { Account } from "models/user";
import { RootState } from "state";

export const getUser = (state: RootState): Account | null => state.user.account;
