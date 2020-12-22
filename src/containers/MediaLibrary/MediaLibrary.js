import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ImagesDropBox from "./ImagesDropBox";
import ImagesList from "./ImagesList";
import "./medialibrary.styles.css";

function MediaLibrary() {
  return (
    <DndProvider backend={HTML5Backend}>
      <section className="library">
        <ImagesList />
        <ImagesDropBox />
      </section>
    </DndProvider>
  );
}

export default MediaLibrary;
