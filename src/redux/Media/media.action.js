import { IMAGES, DROPPED_IMAGES } from "./media.types";

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
