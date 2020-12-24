import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ChangePhotoProvider from "./context/ChangePhotoProvider";
import ImagesDropBox from "./ImagesDropBox";
import ImagesList from "./ImagesList";
import "./medialibrary.styles.css";

function MediaLibrary() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ChangePhotoProvider>
        <section className="library">
          <ImagesList />
          <ImagesDropBox />
        </section>
      </ChangePhotoProvider>
    </DndProvider>
  );
}

export default MediaLibrary;
