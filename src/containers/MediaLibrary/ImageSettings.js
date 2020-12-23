import { cogIcon, trashIcon } from "assets/images";
import SwitchBoard from "components/SwitchBoard";
import Tabs from "components/Tabs";
import { Fragment } from "react";
import { connect } from "react-redux";
import { deleteDroppedImage } from "redux/Media/media.action";

function ImageSettings({ data, removeImage }) {
  const changeImage = (
    <Fragment>
      <img src={data.src} alt="" className="preview-image" />
      <h3
        type="button"
        className="change-photo-btn"
        onClick={() => console.log("Change photo")}
      >
        Change Photo
      </h3>
    </Fragment>
  );
  const initItems = [
    {
      title: "Image",
      content: changeImage,
    },
    {
      title: "Filter",
      content: "Filter Tab",
    },
  ];

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
