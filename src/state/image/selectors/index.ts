import { RootState } from "state";

export const getImage = (state: RootState): string | null => state.image.image;
export const getImageIsLoading = (state: RootState): boolean =>
  state.image.imageIsLoading;
