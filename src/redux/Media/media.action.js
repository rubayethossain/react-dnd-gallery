import { IMAGES, DROPPED_IMAGES, SORT_IMAGES } from "./media.types";

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
