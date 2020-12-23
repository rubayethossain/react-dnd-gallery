import { useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { MediaDragTypes } from "./types";
import Image from "components/Image";
import ImageSettings from "./ImageSettings";
import { connect } from "react-redux";
import { applyFilterToDroppedImage } from "redux/Media/media.action";

function DroppedImage({ imgData, index, moveImage, saveImageFilter }) {
  const [showSetting, toggleSettingsDisplay] = useState(false);
  const [invert, setInvert] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    const { invert, opacity, brightness, contrast } = imgData;

    if (invert) setInvert(invert);
    if (opacity) setOpacity(opacity);
    if (brightness) setBrightness(brightness);
    if (contrast) setContrast(contrast);
  }, [imgData]);

  const [, drop] = useDrop({
    accept: MediaDragTypes.DROP_IMAGE,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Get horizontal middle
      const hoverMiddleX =
        (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Get pixels to the left
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;

      const upwards = dragIndex > hoverIndex && hoverClientY > hoverMiddleY;
      const downwards = dragIndex < hoverIndex && hoverClientY < hoverMiddleY;
      const leftwards = dragIndex > hoverIndex && hoverClientX > hoverMiddleX;
      const rightwards = dragIndex < hoverIndex && hoverClientX < hoverMiddleX;

      if (upwards && (leftwards || rightwards)) {
        return;
      }

      if (downwards && (leftwards || rightwards)) {
        return;
      }
      // Time to actually perform the action
      moveImage(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [, /*{ isDragging }*/ drag] = useDrag({
    item: { type: MediaDragTypes.DROP_IMAGE, id: imgData.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  const setImageFilter = (filter, value) => {
    switch (filter) {
      case "invert":
        setInvert(value);
        break;

      case "opacity":
        setOpacity(value);
        break;

      case "brightness":
        setBrightness(value);
        break;

      case "contrast":
        setContrast(value);
        break;

      default:
        return;
    }
  };

  const onMouseLeave = () => {
    toggleSettingsDisplay(false);

    /*
    Storing image filter to redux when mouse leave or hover out.
    Would be a costly transactions to do it when filter is applied on a image, 
    thus saving it later. Although if user refresh the browser when applying filter
    on the image the filter data will not be saved but this is an edge case and can 
    ignore for this project. 
    */
    saveImageFilter(imgData.id, { invert, opacity, brightness, contrast });
  };

  return (
    <div
      ref={ref}
      className="dropped-img-wrapper"
      onMouseEnter={toggleSettingsDisplay.bind(null, true)}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={imgData.src}
        invert={invert}
        opacity={opacity}
        brightness={brightness}
        contrast={contrast}
      />
      {showSetting && (
        <ImageSettings
          data={imgData}
          filter={{ invert, opacity, brightness, contrast }}
          setFilter={setImageFilter}
        />
      )}
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    saveImageFilter: (imgId, filter) =>
      dispatch(applyFilterToDroppedImage(imgId, filter)),
  };
}

export default connect(null, mapDispatchToProps)(DroppedImage);
