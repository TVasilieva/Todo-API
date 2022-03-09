import { takeLatest, put } from "@redux-saga/core/effects";
import ImageAPI from "api/image";
import { AxiosResponse } from "axios";
import { ActionPayload } from "state";
import {
  uploadImageResponse,
  uploadImageResponseError,
} from "state/image/actions";
import { ImageActions } from "../actions";

function* uploadMainImage(action: ActionPayload<string>) {
  try {
    const response: AxiosResponse<any> = yield ImageAPI.uploadImage(
      action.payload as any
    );

    yield put(uploadImageResponse());
  } catch (error) {
    yield put(uploadImageResponseError((error as TypeError).message));
  }
}

export const imageSagas = [
  takeLatest(ImageActions.UPLOAD_IMAGE_REQUEST, uploadMainImage),
];
