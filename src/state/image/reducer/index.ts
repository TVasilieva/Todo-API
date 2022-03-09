import { ImageActions } from "state/image/actions";
import { ActionsType } from "utils/actionCreator";
import { ImageReducer } from "./types";

const initialState: ImageReducer = {};

export const imageReducer = (
  state = initialState,
  action: ActionsType
): ImageReducer => {
  switch (action.type) {
    case ImageActions.UPLOAD_IMAGE_REQUEST:
      return {};
    case ImageActions.UPLOAD_IMAGE_RESPONSE:
      return {};
    case ImageActions.UPLOAD_IMAGE_RESPONSE_ERROR:
      return {};
    default:
      return state;
  }
};
