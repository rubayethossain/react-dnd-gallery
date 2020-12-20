import Image from "components/Image";
import { useDrag } from "react-dnd";
import { MediaDragTypes } from "./types";

function ImageDrag({ src }) {
  const [{ isDragging }, draggableImage] = useDrag({
    item: {
      type: MediaDragTypes.IMAGE,
      src,
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
    />
  );
}

export default ImageDrag;
