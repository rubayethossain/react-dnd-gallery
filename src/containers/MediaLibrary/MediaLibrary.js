import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchImagesToMedia } from "redux/Media/media.thunk";

function MediaLibrary({ mediaImages, dispatch }) {
  useEffect(() => {
    dispatch(fetchImagesToMedia());
  }, [dispatch]);

  return (
    <section>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          flexWrap: "wrap",
          width: "200px",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        {mediaImages.map((media, key) => (
          <li key={key}>
            <img
              src={media}
              alt=""
              style={{ width: "200px", height: "300px", objectFit: "cover" }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    mediaImages: state.media.images,
  };
}

export default connect(mapStateToProps)(MediaLibrary);
