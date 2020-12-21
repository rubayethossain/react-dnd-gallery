import Image from "components/Image";
import { useDrop } from "react-dnd";
import { connect } from "react-redux";
import { saveDroppedImages } from "redux/Media/media.action";
import { MediaDragTypes } from "./types";

function ImagesDropBox({ droppedImages, uploadDroppedImage }) {
  const [{ isOver }, dropContainer] = useDrop({
    accept: MediaDragTypes.IMAGE,
    drop: (item) => uploadDroppedImage(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    canDrop: (item) => {
      // Check the selected image already exists in the gallery, cancel if exist
      const isExistingImage = droppedImages.find((img) => img.id === item.id);
      return !isExistingImage;
    },
  });

  return (
    <div
      className="image-container"
      ref={dropContainer}
      style={isOver ? { background: "#333" } : {}}
    >
      {droppedImages.map((img, key) => (
        <Image key={key} src={img.src} />
      ))}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesDropBox);
