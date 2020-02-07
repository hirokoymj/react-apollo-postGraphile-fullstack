import React, { useEffect, useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDropzone } from "react-dropzone";

const useStyles = makeStyles(theme => ({
  dropzone: {
    border: "2px dashed lightblue",
    padding: "20px"
  }
}));

export const MyDropzone = () => {
  const [value, setValue] = useState("");

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    //console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // console.log(getRootProps());
  // console.log(getInputProps());
  // console.log(onDrop);

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};
