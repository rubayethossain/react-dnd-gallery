import { useDrop } from "react-dnd";
import { MediaDragTypes } from "./types";

function ImagesDropBox(props) {
  const [{ isOver }, dropContainer] = useDrop({
    accept: MediaDragTypes.IMAGE,
    drop: (item) => console.log(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <div
      className="image-container"
      ref={dropContainer}
      style={isOver ? { background: "#333" } : {}}
    ></div>
  );
}

export default ImagesDropBox;
