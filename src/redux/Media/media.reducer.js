import {
  IMAGES,
  DROPPED_IMAGES,
  SORT_IMAGES,
  DEL_DROP_IMAGE,
} from "./media.types";

const INITIAL_MEDIAS = {
  images: [],
  droppedImages: [],
};

const reducer = (state = INITIAL_MEDIAS, action) => {
  switch (action.type) {
    case IMAGES:
      return {
        ...state,
        images: action.payload,
      };

    case DROPPED_IMAGES:
      return {
        ...state,
        droppedImages: [...state.droppedImages, action.payload],
      };

    case SORT_IMAGES:
      return {
        ...state,
        droppedImages: action.payload,
      };

    case DEL_DROP_IMAGE:
      const filteredDroppedImages = state.droppedImages.filter(
        (img) => img.id !== action.payload
      );
      return {
        ...state,
        droppedImages: filteredDroppedImages,
      };

    default:
      return state;
  }
};

export default reducer;
