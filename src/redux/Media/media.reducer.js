import { IMAGES, DROPPED_IMAGES, SORT_IMAGES } from "./media.types";

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

    default:
      return state;
  }
};

export default reducer;
