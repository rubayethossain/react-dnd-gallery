import { cogIcon, trashIcon } from "assets/images";
import SwitchBoard from "components/SwitchBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ImagesDropBox from "./ImagesDropBox";
import ImagesList from "./ImagesList";

function MediaLibrary() {
  return (
    <DndProvider backend={HTML5Backend}>
      <section className="library">
        <SwitchBoard
          items={[
            {
              icon: cogIcon,
              type: "content",
              content: "Image Replace or Filter Tab",
              action: null,
            },
            {
              icon: trashIcon,
              type: "button",
              content: null,
              action: () => {},
            },
          ]}
        />
        <ImagesList />
        <ImagesDropBox />
      </section>
    </DndProvider>
  );
}

export default MediaLibrary;
