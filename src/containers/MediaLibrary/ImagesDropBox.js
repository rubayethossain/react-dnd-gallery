import { useState } from "react";
import { useDrop } from "react-dnd";
import { MediaDragTypes } from "./types";

const initialImages = [
  {
    type: "image",
    src:
      "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
    id: 2,
  },
  {
    type: "image",
    src: "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
    id: 3,
  },
  {
    type: "image",
    src:
      "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
    id: 4,
  },
  {
    type: "image",
    src:
      "https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136",
    id: 5,
  },
  {
    type: "image",
    src:
      "https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925",
    id: 9,
  },
  {
    type: "image",
    src:
      "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606",
    id: 10,
  },
  {
    type: "image",
    src:
      "https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846",
    id: 8,
  },
  {
    type: "image",
    src:
      "https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925",
    id: 9,
  },
];

function ImagesDropBox() {
  const [droppedImages, updateDroppedImages] = useState([...initialImages]);

  const saveDroppedImages = (newImage) => {
    updateDroppedImages((existingImages) => [...existingImages, newImage]);
  };

  const [{ isOver }, dropContainer] = useDrop({
    accept: MediaDragTypes.IMAGE,
    drop: (item) => saveDroppedImages(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      className="image-container"
      ref={dropContainer}
      style={isOver ? { background: "#333" } : {}}
    >
      {droppedImages.map((img, key) => (
        <img key={key} src={img.src} alt="" style={{ width: 125 }} />
      ))}
    </div>
  );
}

export default ImagesDropBox;
