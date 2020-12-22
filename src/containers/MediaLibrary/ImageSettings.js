import { cogIcon, trashIcon } from "assets/images";
import SwitchBoard from "components/SwitchBoard";

function ImageSettings({ data }) {
  return (
    <div className="dropped-image-switch">
      <SwitchBoard
        items={[
          {
            icon: cogIcon,
            type: "content",
            content: (
              <button onClick={() => console.log("Hit")}>Change Image</button>
            ),
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
    </div>
  );
}

export default ImageSettings;
