import { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { MdDragIndicator } from "react-icons/md";
import { useDataStore } from "~/store";

export const ComparisonContainer = () => {
  const selectedImage = useDataStore((state) => state.selectedImage);
  const originalImage = selectedImage.image;
  const bgRemovedImage = selectedImage.uploaded ?? selectedImage.image;

  const [leftSize, setLeftSize] = useState(50);

  return (
    <div className="relative w-full max-w-4xl shadow-md rounded-lg overflow-hidden mx-auto border border-stone-300">
      <PanelGroup
        direction="horizontal"
        className="absolute z-20 w-full h-full"
      >
        <Panel
          defaultSize={50}
          minSize={0}
          onResize={(newSize) => {
            setLeftSize(newSize);
          }}
        ></Panel>
        <PanelResizeHandle className="relative border border-stone-400">
          <div className="flex h-full absolute items-center">
            <MdDragIndicator className="bg-stone-200 rounded-sm -translate-x-1/2 shadow-sm" />
          </div>
        </PanelResizeHandle>
        <Panel defaultSize={50} minSize={0}></Panel>
      </PanelGroup>
      <img src={bgRemovedImage} alt="Original" className="w-full h-auto" />
      <img
        className="w-full h-full absolute z-10 top-0 left-0"
        src={originalImage}
        alt="Background Removed"
        style={{
          clipPath: `inset(0 ${100 - leftSize}% 0 0)`,
        }}
      />
    </div>
  );
};
