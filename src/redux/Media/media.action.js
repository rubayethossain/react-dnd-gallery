import { STORE_IMAGES } from "./media.types";

// Add images to media.
export const addImagesToMedia = (images) => ({
  type: STORE_IMAGES,
  payload: images,
});
