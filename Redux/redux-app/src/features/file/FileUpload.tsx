import React, { useState } from "react";
import { uploadFile } from "./fileSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

const FileUpload: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.file);

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      dispatch(uploadFile(file));
    }
  };

  return (
    <div className="upload-container">
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>

      {error && <p className="error">Error: {error}</p>}
    </div>
  );
};

export default FileUpload;
