import { takeLatest, put } from "@redux-saga/core/effects";
import ImageAPI from "api/image";
import { ActionPayload } from "state";
import {
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

export const imageSagas = [
  takeLatest(ImageActions.UPLOAD_IMAGE_REQUEST, uploadMainImage),
];
