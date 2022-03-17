import { ImageActions } from "state/image/actions";
import { ActionsType } from "utils/actionCreator";
import { ImageReducer } from "./types";

const initialState: ImageReducer = {
  image: "",
  imageIsLoading: true,
  imageError: null,
};

export const imageReducer = (
  state = initialState,
  action: ActionsType
): ImageReducer => {
  switch (action.type) {
    case ImageActions.UPLOAD_IMAGE_REQUEST:
      return {
        ...state,
        imageIsLoading: true,
      };
    case ImageActions.UPLOAD_IMAGE_RESPONSE:
      return {
        ...state,
        image: action.payload,
        imageIsLoading: false,
      };
    case ImageActions.UPLOAD_IMAGE_RESPONSE_ERROR:
      return {
        ...state,
        imageIsLoading: false,
        imageError: action.payload,
      };

    case ImageActions.GET_IMAGE_REQUEST:
      return {
        ...state,
        imageIsLoading: true,
      };
    case ImageActions.GET_IMAGE_RESPONSE:
      return {
        ...state,
        image: action.payload,
        imageIsLoading: false,
      };
    case ImageActions.GET_IMAGE_RESPONSE_ERROR:
      return {
        ...state,
        imageIsLoading: false,
        imageError: action.payload,
      };

    case ImageActions.REMOVE_IMAGE_REQUEST:
      return {
        ...state,
        imageIsLoading: true,
      };
    case ImageActions.REMOVE_IMAGE_RESPONSE:
      return {
        ...state,
        image: "",
        imageIsLoading: false,
      };
    case ImageActions.REMOVE_IMAGE_RESPONSE_ERROR:
      return {
        ...state,
        imageIsLoading: false,
        imageError: action.payload,
      };
    default:
      return state;
  }
};
