import { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { changeDroppedPhoto } from "redux/Media/media.action";
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

  const confirmChanges = () => {
    dispatch(
      changeDroppedPhoto(changePhoto.id, {
        ...selectedPhoto,
        invert: 0,
        opacity: 0,
        brightness: 0,
        contrast: 0,
      })
    );

    setSelectedPhoto({});
    setChangePhoto(null);
  };

  const changePhotoToolbox = (
    <div className="change-toolbox">
      <button type="button" onClick={confirmChanges}>
        Confirm
      </button>
      <button type="button" onClick={() => setChangePhoto(null)}>
        Cancel
      </button>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#fff", position: "relative" }}>
      <p className="list-title">Media Panel</p>
      <ul className="media-list">
        {mediaImages.map(({ img, id }, key) => (
          <li
            key={key}
            onClick={handlePhotoSelection.bind(null, { src: img, id })}
          >
            <ImageDrag
              src={img}
              id={id}
              className={id === selectedPhoto.id ? "selected-image" : ""}
            />
          </li>
        ))}
      </ul>
      {changePhoto && changePhotoToolbox}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    mediaImages: state.media.images,
  };
}

export default connect(mapStateToProps)(ImagesList);
