import { RootState } from "state";

export const getUser = (state: RootState) => state.user.account;
