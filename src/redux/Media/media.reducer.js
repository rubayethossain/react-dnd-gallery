import { IMAGES } from "./media.types";

const INITIAL_MEDIAS = {
  images: [],
};

const reducer = (state = INITIAL_MEDIAS, action) => {
  switch (action.type) {
    case IMAGES:
      return {
        ...state,
        images: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
