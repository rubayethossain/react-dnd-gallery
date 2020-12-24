import React, { useState } from "react";
import ChangePhotoContext from "./ChangePhotoContext";

function ChangePhotoProvider({ children }) {
  const [changePhoto, setChangePhoto] = useState(null);

  return (
    <ChangePhotoContext.Provider
      value={{
        changePhoto,
        setChangePhoto,
      }}
    >
      {children}
    </ChangePhotoContext.Provider>
  );
}

export default ChangePhotoProvider;
