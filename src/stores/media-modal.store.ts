import { defineStore } from "pinia";
import LoggerUtil from "@/utils/logger/logger.util";

export const useMediaModalStore = defineStore({
  id: "media-modal-store",
  state: () => ({
    uploadProductsOpen: false,
    uploadOpen: false,
    imageOpen: false,
    selectedImage: null,
  }),
  getters: {
    isUploadModalOpened: (state) => state.uploadOpen,
    isUploadProductsOpened: (state) => state.uploadProductsOpen,
  },
  actions: {
    openUploadModal() {
      this.uploadOpen = true;
    },
    openUploadProducts() {
      this.uploadProductsOpen = true;
    },
    openImage(image) {
      this.imageOpen = true;
      this.selectedImage = image;
    },
  },
});
