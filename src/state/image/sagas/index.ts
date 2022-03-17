import { takeLatest, put } from "@redux-saga/core/effects";
import ImageAPI from "api/image";
import { AxiosResponse } from "axios";
import { ActionPayload } from "state";
import {
  getImageResponse,
  getImageResponseError,
  uploadImageResponse,
  uploadImageResponseError,
} from "state/image/actions";
import { ImageActions } from "../actions";

function* uploadMainImage(action: ActionPayload<File>) {
  try {
    yield ImageAPI.uploadImage(action.payload as File);
    yield put(uploadImageResponse(action.payload.name as string));
  } catch (error) {
    yield put(uploadImageResponseError((error as TypeError).message));
  }
}

function* getMainImage(action: ActionPayload<string>) {
  try {
    const response: AxiosResponse<any> = yield ImageAPI.getImage(
      action.payload as string
    );
    yield put(getImageResponse(response.data));
  } catch (error) {
    yield put(getImageResponseError((error as TypeError).message));
  }
}

export const imageSagas = [
  takeLatest(ImageActions.UPLOAD_IMAGE_REQUEST, uploadMainImage),
  takeLatest(ImageActions.GET_IMAGE_REQUEST, getMainImage),
];
