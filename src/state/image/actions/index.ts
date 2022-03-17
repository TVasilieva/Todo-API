import {} from "api/types";
import { actionCreator } from "utils/actionCreator";

export enum ImageActions {
  UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST",
  UPLOAD_IMAGE_RESPONSE = "UPLOAD_IMAGE_RESPONSE",
  UPLOAD_IMAGE_RESPONSE_ERROR = "UPLOAD_IMAGE_RESPONSE_ERROR",
}

export const uploadImageRequest = (file: File) =>
  actionCreator<ImageActions, File>(ImageActions.UPLOAD_IMAGE_REQUEST, file);
export const uploadImageResponse = (file: string) =>
  actionCreator<ImageActions, string>(ImageActions.UPLOAD_IMAGE_RESPONSE, file);
export const uploadImageResponseError = (error: any) =>
  actionCreator<ImageActions, any>(
    ImageActions.UPLOAD_IMAGE_RESPONSE_ERROR,
    error
  );
