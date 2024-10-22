import Image from "components/Image";
import { useDrag } from "react-dnd";
import { MediaDragTypes } from "./types";

function ImageDrag({ src, id, className }) {
  const [{ isDragging }, draggableImage] = useDrag({
    item: {
      type: MediaDragTypes.IMAGE,
      src,
      id,
      invert: 0,
      opacity: 0,
      brightness: 0,
      contrast: 0,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <Image
      src={src}
      ref={draggableImage}
      style={isDragging ? { height: "auto" } : {}}
      className={className}
    />
  );
}

export default ImageDrag;
