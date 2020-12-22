import { cogIcon, trashIcon } from "assets/images";
import SwitchBoard from "components/SwitchBoard";
import Tabs from "components/Tabs";
import { connect } from "react-redux";
import { deleteDroppedImage } from "redux/Media/media.action";

const initItems = [
  {
    title: "Image",
    content: "Image Tab",
  },
  {
    title: "Filter",
    content: "Filter Tab",
  },
];

function ImageSettings({ data, removeImage }) {
  return (
    <div className="dropped-image-switch">
      <SwitchBoard
        items={[
          {
            icon: cogIcon,
            type: "content",
            content: <Tabs items={initItems} />,
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
