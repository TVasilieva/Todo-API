import { User } from "models/user";
import { RootState } from "state";

export const getUser = (state: RootState): User | null => state.user.account;
