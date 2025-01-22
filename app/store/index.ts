import { create } from "zustand";

import { v4 as uuidv4 } from "uuid";

export const useDataStore = create((set, get) => ({
  selectedImage: null,
  images: [],
  removeImage: (id) => {
    set((state) => ({ images: state.images.filter((item) => item.id !== id) }));
  },
  addImage: (fileBase64: string) => {
    const newImage = { id: uuidv4(), image: fileBase64 };
    set((state) => ({
      images: [...state.images, newImage],
    }));

    return newImage.id;
  },
  updateLoadedImage: (id: string, loadedImage: File) => {
    const currentImages = get().images;

    let updateImage = null;

    const updateImages = currentImages.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, uploaded: loadedImage };
        updateImage = newItem;
        return newItem;
      }
      return item;
    });

    set({
      images: updateImages,
      selectedImage: updateImage,
    });
  },
  selectImage: (image) => {
    set({ selectedImage: image });
  },
}));
