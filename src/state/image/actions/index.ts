import {} from "api/types";
import { actionCreator } from "utils/actionCreator";

export enum ImageActions {
  UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST",
  UPLOAD_IMAGE_RESPONSE = "UPLOAD_IMAGE_RESPONSE",
  UPLOAD_IMAGE_RESPONSE_ERROR = "UPLOAD_IMAGE_RESPONSE_ERROR",

  GET_IMAGE_REQUEST = "GET_IMAGE_REQUEST",
  GET_IMAGE_RESPONSE = "GET_IMAGE_RESPONSE",
  GET_IMAGE_RESPONSE_ERROR = "GET_IMAGE_RESPONSE_ERROR",

  REMOVE_IMAGE_REQUEST = "REMOVE_IMAGE_REQUEST",
  REMOVE_IMAGE_RESPONSE = "REMOVE_IMAGE_RESPONSE",
  REMOVE_IMAGE_RESPONSE_ERROR = "REMOVE_IMAGE_RESPONSE_ERROR",
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

export const getImageRequest = (id: string) =>
  actionCreator<ImageActions, string>(ImageActions.GET_IMAGE_REQUEST, id);
export const getImageResponse = (id: string) =>
  actionCreator<ImageActions, string>(ImageActions.GET_IMAGE_RESPONSE, id);
export const getImageResponseError = (error: any) =>
  actionCreator<ImageActions, any>(
    ImageActions.GET_IMAGE_RESPONSE_ERROR,
    error
  );

export const removeImageRequest = () =>
  actionCreator<ImageActions>(ImageActions.REMOVE_IMAGE_REQUEST);
export const removeImageResponse = () =>
  actionCreator<ImageActions>(ImageActions.REMOVE_IMAGE_RESPONSE);
export const removeImageResponseError = (error: any) =>
  actionCreator<ImageActions, any>(
    ImageActions.REMOVE_IMAGE_RESPONSE_ERROR,
    error
  );
