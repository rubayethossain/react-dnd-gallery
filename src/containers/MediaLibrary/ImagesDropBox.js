import Tabs from "components/Tabs";
import { useCallback, useContext } from "react";
import { useDrop } from "react-dnd";
import { connect } from "react-redux";
import { saveDroppedImages, sortDroppedImages } from "redux/Media/media.action";
import DroppedImage from "./DroppedImage";
import { MediaDragTypes } from "./types";
import { folderIcon } from "assets/images";
import ChangePhotoContext from "./context/ChangePhotoContext";

function ImagesDropBox({
  droppedImages,
  uploadDroppedImage,
  reorderDroppedImages,
}) {
  const { changePhoto } = useContext(ChangePhotoContext);

  const [{ isOver, canDrop }, dropContainer] = useDrop({
    accept: MediaDragTypes.IMAGE,
    drop: (item) => uploadDroppedImage(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
    canDrop: (item) => {
      // Check the selected image already exists in the gallery, cancel if exist
      const isExistingImage = droppedImages.find((img) => img.id === item.id);
      return !isExistingImage;
    },
  });

  const moveImage = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = droppedImages[dragIndex];
      const images = [...droppedImages];

      images.splice(dragIndex, 1);
      images.splice(hoverIndex, 0, dragCard);

      reorderDroppedImages(images);
    },
    [droppedImages, reorderDroppedImages]
  );

  const message = (
    <div className="drop-message">
      <img src={folderIcon} alt="" />
      <p>Drop an image from Media Panel</p>
    </div>
  );

  return (
    <div
      className={`image-container ${changePhoto ? "has-overlay" : ""}`}
      ref={dropContainer}
      style={isOver ? { background: canDrop ? "#DCEDC8" : "#fff8e178" } : {}}
    >
      {Array.isArray(droppedImages) && !droppedImages.length && message}
      {droppedImages.map((img, key) => (
        <DroppedImage
          key={key}
          imgData={img}
          index={key}
          moveImage={moveImage}
        />
      ))}

      <Tabs />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    droppedImages: state.media.droppedImages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    uploadDroppedImage: (image) => dispatch(saveDroppedImages(image)),
    reorderDroppedImages: (images) => dispatch(sortDroppedImages(images)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesDropBox);
