import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchImagesToMedia } from "redux/Media/media.thunk";
import ImageDrag from "./ImageDrag";

function ImagesList({ mediaImages, dispatch }) {
  useEffect(() => {
    dispatch(fetchImagesToMedia());
  }, [dispatch]);
  return (
    <ul className="media-list">
      {mediaImages.map((media, key) => (
        <li key={key}>
          <ImageDrag src={media} />
        </li>
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    mediaImages: state.media.images,
  };
}

export default connect(mapStateToProps)(ImagesList);
