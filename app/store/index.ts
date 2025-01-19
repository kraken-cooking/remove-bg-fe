import { create } from "zustand";

import { v4 as uuidv4 } from "uuid";

export const useDataStore = create((set) => ({
	selectedImage: null,
	images: [],
	removeImage: (id) => {
		set((state) => ({ images: state.images.filter((item) => item.id !== id) }));
	},
	addImage: (file) => {
		const newImage = { id: uuidv4(), file: file };
		set((state) => ({
			images: [...state.images, newImage],
			selectedImage: newImage,
		}));
	},
	selectImage: (image) => {
		set({ selectedImage: image });
	},
}));
