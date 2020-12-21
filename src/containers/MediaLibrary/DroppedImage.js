import Image from "components/Image";

function DroppedImage({ key, src, id, index }) {
  return (
    <div>
      <Image key={key} src={src} />
    </div>
  );
}

export default DroppedImage;
