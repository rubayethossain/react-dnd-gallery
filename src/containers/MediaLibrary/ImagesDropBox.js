import { useCallback } from "react";
import { useDrop } from "react-dnd";
import { connect } from "react-redux";
import { saveDroppedImages, sortDroppedImages } from "redux/Media/media.action";
import DroppedImage from "./DroppedImage";
import { MediaDragTypes } from "./types";

function ImagesDropBox({
  droppedImages,
  uploadDroppedImage,
  reorderDroppedImages,
}) {
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

      console.log(images);
      reorderDroppedImages(images);
      /* setCards(update(cards, {
        $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
        ],
    })); */
    },
    [droppedImages, reorderDroppedImages]
  );

  return (
    <div
      className="image-container"
      ref={dropContainer}
      style={isOver ? { background: canDrop ? "#DCEDC8" : "#fff8e178" } : {}}
    >
      {droppedImages.map((img, key) => (
        <DroppedImage
          key={key}
          src={img.src}
          id={img.id}
          index={key}
          moveImage={moveImage}
        />
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
    reorderDroppedImages: (images) => dispatch(sortDroppedImages(images)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesDropBox);
