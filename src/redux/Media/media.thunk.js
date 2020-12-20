import { IMAGES_ENDPOINT } from "../../const/endpoints";
import { addImagesToMedia } from "./media.action";

function fetchImages() {
  return fetch(IMAGES_ENDPOINT);
}

// Thunk that fetch images using fetchImages and store in redux store!
function fetchImagesToMedia() {
  return function (dispatch) {
    return fetchImages()
      .then((response) => response.json())
      .then((data) => {
        const images = data.map((d) => d.img);
        dispatch(addImagesToMedia(images));
      });
  };
}

export { fetchImagesToMedia };
