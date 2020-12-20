import { forwardRef } from "react";

const Image = forwardRef((props, ref) => {
  return <img ref={ref} className="list-image" alt="" {...props} />;
});

export default Image;
