import {
  IMAGES,
  DROPPED_IMAGES,
  SORT_IMAGES,
  DEL_DROP_IMAGE,
  SET_FILTER,
} from "./media.types";

// Add images to media.
export const addImagesToMedia = (images) => ({
  type: IMAGES,
  payload: images,
});

// Store dropped image
export const saveDroppedImages = (image) => ({
  type: DROPPED_IMAGES,
  payload: image,
});

export const sortDroppedImages = (images) => ({
  type: SORT_IMAGES,
  payload: images,
});

export const deleteDroppedImage = (imgId) => ({
  type: DEL_DROP_IMAGE,
  payload: imgId,
});

export const applyFilterToDroppedImage = (imgId, filter) => ({
  type: SET_FILTER,
  payload: imgId,
  filter,
});
