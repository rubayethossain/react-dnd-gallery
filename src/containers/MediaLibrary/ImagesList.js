import { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchImagesToMedia } from "redux/Media/media.thunk";
import ChangePhotoContext from "./context/ChangePhotoContext";
import ImageDrag from "./ImageDrag";

function ImagesList({ mediaImages, dispatch }) {
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const { changePhoto, setChangePhoto } = useContext(ChangePhotoContext);

  useEffect(() => {
    dispatch(fetchImagesToMedia());
  }, [dispatch]);

  useEffect(() => {
    setSelectedPhoto(changePhoto || {});
  }, [changePhoto]);

  const handlePhotoSelection = (imgData) => {
    if (changePhoto) {
      setSelectedPhoto(imgData);
    }
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <p className="list-title">Media Panel</p>
      <ul className="media-list">
        {mediaImages.map(({ img, id }, key) => (
          <li key={key} onClick={handlePhotoSelection.bind(null, { img, id })}>
            <ImageDrag
              src={img}
              id={id}
              className={id === selectedPhoto.id ? "selected-image" : ""}
            />
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
