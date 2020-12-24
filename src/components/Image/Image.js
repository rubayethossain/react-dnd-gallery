import { forwardRef, useMemo } from "react";

const calOpacity = (opacity) => 1 - parseInt(opacity, 10) / 100;

const calBrightness = (brightness) => parseInt(brightness, 10) / 100 + 1;

const calContrast = (contrast) => 100 + parseInt(contrast, 10);

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
      alt=""
      {...props}
      className={`list-image ${props.className}`}
      style={filterStyle}
    />
  );
});

export default Image;
