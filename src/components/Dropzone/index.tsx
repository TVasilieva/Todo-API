import { FC } from "react";
import Dropzone from "react-dropzone";
import { useAppDispatch } from "state";
import { uploadImageRequest } from "state/image/actions";

import ComponentProps from "./types";

const imageMaxSize = 10000000;

const AppDropzone: FC<ComponentProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const handleOnDrop = (files: File[]) => {
    dispatch(uploadImageRequest(files[0]));
  };

  return (
    <>
      <Dropzone
        onDrop={handleOnDrop}
        accept="image/*"
        multiple={false}
        maxSize={imageMaxSize}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps({
              onDrop: (event) => event.stopPropagation(),
            })}
          >
            <input {...getInputProps()} />
            {children}
          </div>
        )}
      </Dropzone>
    </>
  );
};

export default AppDropzone;
