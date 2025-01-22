import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { useDataStore } from "~/store";
import { fileToBase64 } from "~/utils";

export const UploadCard = () => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addImage = useDataStore((state) => state.addImage);

  const selectedImage = useDataStore((state) => state.selectedImage);
  const updateLoadedImage = useDataStore((state) => state.updateLoadedImage);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleImageUpload(file);
    }
  };

  const handleImageUpload = async (file: File) => {
    const imageBase64 = await fileToBase64(file);

    const imageId = addImage(imageBase64);

    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch("http://127.0.0.1:5001/api/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      const image = data.image;
      updateLoadedImage(imageId, image);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      handleImageUpload(file);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {selectedImage ? (
        <div className="border-2 border-gray-300 rounded-lg">
          <img alt="select" src={selectedImage.file} />
        </div>
      ) : (
        <div
          className={`
          aspect-square
          w-full
          rounded-lg
          border-2
          border-dashed
          transition-colors
          ${isDragging ? "border-purple-600 bg-purple-50" : "border-gray-300"}
          flex
          flex-col
          items-center
          justify-center
          relative
          overflow-hidden
        `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <div className="text-center p-8">
            <div className="mb-4">
              <span className="w-32 h-32 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-16 h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-3xl text-gray-700 font-medium mb-2">
              Drop your image here
            </h3>
            <p className="text-gray-500 mb-4">or</p>
            <button
              onClick={handleButtonClick}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
            >
              Choose File
            </button>
            <p className="text-gray-400 text-sm mt-4">
              Supports: JPG, PNG, WEBP
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
