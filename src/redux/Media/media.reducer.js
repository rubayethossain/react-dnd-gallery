import { IMAGES, DROPPED_IMAGES, SORT_IMAGES } from "./media.types";

const INITIAL_MEDIAS = {
  images: [],
  droppedImages: [
    {
      type: "image",
      src:
        "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
      id: 2,
      index: 0,
    },
    {
      type: "image",
      src:
        "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
      id: 3,
      index: 1,
    },
    {
      type: "image",
      src:
        "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
      id: 4,
      index: 2,
    },
    {
      type: "image",
      src:
        "https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136",
      id: 5,
      index: 3,
    },
    {
      type: "image",
      src:
        "https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925",
      id: 9,
      index: 4,
    },
  ],
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
