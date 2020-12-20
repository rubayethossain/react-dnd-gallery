import { STORE_IMAGES } from "./media.types";

const INITIAL_MEDIAS = {
  images: [],
};

const reducer = (state = INITIAL_MEDIAS, action) => {
  switch (action.type) {
    case STORE_IMAGES:
      return {
        ...state,
        images: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
