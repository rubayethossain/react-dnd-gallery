import SwitchBoard from "components/SwitchBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ImagesDropBox from "./ImagesDropBox";
import ImagesList from "./ImagesList";

function MediaLibrary() {
  return (
    <DndProvider backend={HTML5Backend}>
      <section className="library">
        <SwitchBoard />
        <ImagesList />
        <ImagesDropBox />
      </section>
    </DndProvider>
  );
}

export default MediaLibrary;
