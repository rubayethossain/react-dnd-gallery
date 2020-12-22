import { cogIcon, trashIcon } from "assets/images";
import SwitchBoard from "components/SwitchBoard";
import { connect } from "react-redux";
import { deleteDroppedImage } from "redux/Media/media.action";

function ImageSettings({ data, removeImage }) {
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
            action: () => removeImage(data.id),
          },
        ]}
      />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    removeImage: (imgId) => dispatch(deleteDroppedImage(imgId)),
  };
}

export default connect(null, mapDispatchToProps)(ImageSettings);
