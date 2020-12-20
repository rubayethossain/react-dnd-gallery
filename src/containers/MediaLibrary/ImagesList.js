import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchImagesToMedia } from "redux/Media/media.thunk";

function ImagesList({ mediaImages, dispatch }) {
  useEffect(() => {
    dispatch(fetchImagesToMedia());
  }, [dispatch]);
  return (
    <ul className="media-list">
      {mediaImages.map((media, key) => (
        <li key={key}>
          <img src={media} alt="" className="list-image" />
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
