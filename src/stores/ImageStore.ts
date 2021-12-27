import create from "zustand";

type ImageStore = {
  images: Array<Uint8Array>;
  setImages: (newImages: Array<Uint8Array>) => void;
};

const useImageStore = create<ImageStore>(set => ({
  images: [],
  setImages: (newImages: Array<Uint8Array>) =>
    set(state => {
      return { images: newImages };
    })
}));

export default useImageStore;
