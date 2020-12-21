import { IMAGES } from "./media.types";

// Add images to media.
export const addImagesToMedia = (images) => ({
  type: IMAGES,
  payload: images,
});
