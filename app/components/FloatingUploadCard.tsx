import { useDataStore } from "~/store";

export const FloatingUploadCard = () => {
  const images = useDataStore((state) => state.images);

  const selectImage = useDataStore((state) => state.selectImage);
  const selectedImage = useDataStore((state) => state.selectedImage);

  const onAddNew = () => {
    selectImage(null);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="flex gap-2">
        {/* Floating Button */}
        <button
          onClick={onAddNew}
          className="w-14 h-14 bg-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-purple-700 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4c.5 0 1 .4 1 1v6h6c.6 0 1 .4 1 1s-.4 1-1 1h-6v6c0 .6-.4 1-1 1s-1-.4-1-1v-6H5c-.6 0-1-.4-1-1s.4-1 1-1h6V5c0-.6.4-1 1-1z"
            />
          </svg>
        </button>
        {images.map((item) => (
          <button
            key={item.id}
            className={`relative overflow-hidden h-14 w-14 rounded-lg border-2 hover:outline outline-2 outline-purple-400 border-purple-100 ${
              selectedImage?.id === item.id && "border-purple-400"
            }`}
            onClick={() => {
              selectImage(item);
            }}
          >
            <img
              src={item.image}
              className="w-full h-full object-cover"
              alt="file"
            />
            {!item.uploaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10">
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
