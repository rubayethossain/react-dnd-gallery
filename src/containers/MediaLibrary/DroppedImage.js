import { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { MediaDragTypes } from "./types";
import Image from "components/Image";
import ImageSettings from "./ImageSettings";

function DroppedImage({ imgData, index, moveImage }) {
  const [showSetting, toggleSettingsDisplay] = useState(false);
  const ref = useRef(null);

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

  return (
    <div
      ref={ref}
      className="dropped-img-wrapper"
      onMouseEnter={toggleSettingsDisplay.bind(null, true)}
      onMouseLeave={toggleSettingsDisplay.bind(null, false)}
    >
      <Image src={imgData.src} />
      {showSetting && <ImageSettings data={imgData} />}
    </div>
  );
}

export default DroppedImage;
