import { create } from "zustand";

import { v4 as uuidv4 } from "uuid";

export const useDataStore = create((set) => ({
	selectedImage: null,
	images: [],
	removeImage: (id) => {
		set((state) => ({ images: state.images.filter((item) => item.id !== id) }));
	},
	addImage: (file) => {
		set((state) => ({
			images: [...state.images, { id: uuidv4(), file: file }],
		}));
	},
	selectImage: (image) => {
		set({ selectedImage: image });
	},
}));
