import ImagesDropBox from "./ImagesDropBox";
import ImagesList from "./ImagesList";

function MediaLibrary() {
  return (
    <section className="library">
      <ImagesList />
      <ImagesDropBox />
    </section>
  );
}

export default MediaLibrary;
