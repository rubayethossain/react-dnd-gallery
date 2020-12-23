import { forwardRef, useMemo } from "react";

const calOpacity = (opacity) => (opacity === 0 ? 1 : opacity / 100);

const calBrightness = (brightness) => brightness / 100 + 1;

const calContrast = (contrast) => 100 + contrast;

const Image = forwardRef((props, ref) => {
  const { invert, opacity, brightness, contrast } = props;

  const filterStyle = useMemo(() => {
    return {
      filter: `invert(${invert}%) opacity(${calOpacity(
        opacity
      )}) brightness(${calBrightness(brightness)}) contrast(${calContrast(
        contrast
      )}%)`,
    };
  }, [invert, opacity, brightness, contrast]);

  return (
    <img
      ref={ref}
      className="list-image"
      alt=""
      {...props}
      style={filterStyle}
    />
  );
});

export default Image;
