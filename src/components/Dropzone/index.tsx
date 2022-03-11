import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useAppDispatch } from "state";
import { uploadImageRequest } from "state/image/actions";

import ComponentProps from "./types";

const AppDropzone: FC<ComponentProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const onDrop = useCallback((acceptedFiles) => {
    dispatch(uploadImageRequest(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
    </div>
  );
};

export default AppDropzone;
