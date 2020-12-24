import {
  brightnessIcon,
  cogIcon,
  contrastIcon,
  invertIcon,
  opacityIcon,
  trashIcon,
} from "assets/images";
import FilterItem from "components/FilterItem";
import SwitchBoard from "components/SwitchBoard";
import Tabs from "components/Tabs";
import { Fragment, useContext } from "react";
import { connect } from "react-redux";
import { deleteDroppedImage } from "redux/Media/media.action";
import ChangePhotoContext from "./context/ChangePhotoContext";

function ImageSettings({ data, removeImage, setFilter, filter }) {
  const { setChangePhoto } = useContext(ChangePhotoContext);

  const changeImage = (
    <Fragment>
      <img src={data.src} alt="" className="preview-image" />
      <h3
        type="button"
        className="change-photo-btn"
        onClick={() => setChangePhoto(data)}
      >
        Change Photo
      </h3>
    </Fragment>
  );

  const imageFilter = (
    <Fragment>
      <FilterItem
        className="mb-30"
        icon={invertIcon}
        name="invert"
        unit="dmp"
        onChange={(val) => setFilter("invert", val)}
        range={filter.invert}
      />
      <FilterItem
        className="mb-30"
        icon={opacityIcon}
        name="opacity"
        unit="%"
        onChange={(val) => setFilter("opacity", val)}
        range={filter.opacity}
      />
      <FilterItem
        className="mb-30"
        icon={brightnessIcon}
        name="brightness"
        unit="%"
        onChange={(val) => setFilter("brightness", val)}
        range={filter.brightness}
      />
      <FilterItem
        icon={contrastIcon}
        name="contrast"
        unit="%"
        onChange={(val) => setFilter("contrast", val)}
        range={filter.contrast}
      />
    </Fragment>
  );

  const initItems = [
    {
      title: "Image",
      content: changeImage,
    },
    {
      title: "Filter",
      content: imageFilter,
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
