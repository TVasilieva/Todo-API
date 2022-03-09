import {} from "api/types";
import { actionCreator } from "utils/actionCreator";

export enum ImageActions {
  UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST",
  UPLOAD_IMAGE_RESPONSE = "UPLOAD_IMAGE_RESPONSE",
  UPLOAD_IMAGE_RESPONSE_ERROR = "UPLOAD_IMAGE_RESPONSE_ERROR",
}

export const uploadImageRequest = (data: any) =>
  actionCreator<ImageActions, any>(ImageActions.UPLOAD_IMAGE_REQUEST, data);
export const uploadImageResponse = () =>
  actionCreator<ImageActions>(ImageActions.UPLOAD_IMAGE_RESPONSE);
export const uploadImageResponseError = (error: any) =>
  actionCreator<ImageActions, any>(
    ImageActions.UPLOAD_IMAGE_RESPONSE_ERROR,
    error
  );
