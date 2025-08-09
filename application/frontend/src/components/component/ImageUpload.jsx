import React, { useState, useRef } from "react";
import UploadIcon from "../ui/UploadIcon";
import { Button } from "../ui/button";
import axios from "axios";

function ImageUpload({ onUploadComplete, clearDiagnosis }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null); // Ref to access the file input
  const ML_SERVER_URL = "https://sandy9304-flaskapi.hf.space";
  // const ML_SERVER_URL = "http://localhost:5000";
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    clearDiagnosis();
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("Please upload an image");
      return;
    }
    clearDiagnosis();
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);
      const response = await axios.post(`${ML_SERVER_URL}/predict`, formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });

      onUploadComplete(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error uploading the file:", error);
      setLoading(false);
    }
  };

  return (
    <section
      id="imageupload"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Upload Images
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Upload clear images of the affected area to help our experts
              provide a more accurate preliminary diagnosis.
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col items-center justify-center space-y-2">
                <UploadIcon
                  onClick={handleIconClick}
                  className="h-12 w-12 text-muted-foreground cursor-pointer"
                />
                <p className="text-sm text-muted-foreground">Click to upload</p>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }} // Hide the file input
                />
              </div>

              {selectedFile && (
                <Button type="submit" disabled={loading}>
                  {loading ? "Uploading..." : "Submit Image"}
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageUpload;
