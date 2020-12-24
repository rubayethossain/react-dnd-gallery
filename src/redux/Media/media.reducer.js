import { act } from "@testing-library/react";
import {
  IMAGES,
  DROPPED_IMAGES,
  SORT_IMAGES,
  DEL_DROP_IMAGE,
  SET_FILTER,
  CHANGE_PHOTO,
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

    case SET_FILTER:
      const { payload, filter } = action;

      const imgIndex = state.droppedImages.findIndex(
        (img) => img.id === payload
      );

      if (imgIndex < 0) return state;

      const imgWithFilter = {
        ...state.droppedImages[imgIndex],
        invert: filter.invert || 0,
        opacity: filter.opacity || 0,
        brightness: filter.brightness || 0,
        contrast: filter.contrast || 0,
      };

      const updatedDroppedImages = [...state.droppedImages];

      updatedDroppedImages.splice(imgIndex, 1, imgWithFilter);

      return {
        ...state,
        droppedImages: updatedDroppedImages,
      };

    case CHANGE_PHOTO: {
      const images = [...state.droppedImages];

      const changePhotoIndex = images.findIndex(
        (img) => img.id === action.payload
      );

      if (changePhotoIndex < 0) return state;

      images.splice(changePhotoIndex, 1, action.newImage);

      return {
        ...state,
        droppedImages: images,
      };
    }

    default:
      return state;
  }
};

export default reducer;
