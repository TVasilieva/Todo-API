import { FC } from "react";
import Dropzone from "react-dropzone";

import ComponentProps from "./types";

const imageMaxSize = 1000000;

const AppDropzone: FC<ComponentProps> = ({ children }) => {
  const handleOnDrop = (files: any) => {
    console.log(files);
  };

  return (
    <Dropzone
      onDrop={handleOnDrop}
      accept="image/*"
      multiple={false}
      maxSize={imageMaxSize}
    >
      {({ getRootProps, getInputProps }) => (
        <div className="container">
          <div
            {...getRootProps({
              onDrop: (event) => event.stopPropagation(),
            })}
          >
            <input {...getInputProps()} />
            {children}
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default AppDropzone;
