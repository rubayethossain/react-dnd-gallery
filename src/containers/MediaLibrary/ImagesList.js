import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { fetchImagesToMedia } from "redux/Media/media.thunk";
import ImageDrag from "./ImageDrag";

function ImagesList({ mediaImages, dispatch }) {
  useEffect(() => {
    dispatch(fetchImagesToMedia());
  }, [dispatch]);
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <p className="list-title">Media Panel</p>
      <ul className="media-list">
        {mediaImages.map(({ img, id }, key) => (
          <li key={key}>
            <ImageDrag src={img} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    mediaImages: state.media.images,
  };
}

export default connect(mapStateToProps)(ImagesList);
