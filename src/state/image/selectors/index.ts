import { RootState } from "state";

export const getImage = (state: RootState): string | Blob => state.image.image;
export const getImageIsLoading = (state: RootState): boolean =>
  state.image.imageIsLoading;
