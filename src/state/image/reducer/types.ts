export interface ImageReducer {
  image: string | Blob;
  imageIsLoading: boolean;
  imageError: string | null;
}
