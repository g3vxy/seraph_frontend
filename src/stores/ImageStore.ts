import create from "zustand";

type ImageStore = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  images: Array<any>;
  setImages: (newImages: Array<any>) => void;
};

const useImageStore = create<ImageStore>(set => ({
  loading: false,
  setLoading: () =>
    set(state => {
      return { loading: !state.loading };
    }),
  images: [],
  setImages: (newImages: Array<any>) =>
    set(state => {
      return { images: newImages };
    })
}));

export default useImageStore;
