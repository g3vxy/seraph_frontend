import create from "zustand";

type ImageStore = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  images: Array<Uint8Array>;
  setImages: (newImages: Array<Uint8Array>) => void;
};

const useImageStore = create<ImageStore>(set => ({
  loading: false,
  setLoading: () =>
    set(state => {
      return { loading: !state.loading };
    }),
  images: [],
  setImages: (newImages: Array<Uint8Array>) =>
    set(state => {
      return { images: newImages };
    })
}));

export default useImageStore;
