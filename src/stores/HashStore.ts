import create from "zustand";

type HashStore = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  hashes: Array<number>;
  setHashes: (newHashes: Array<number>) => void;
};

const useHashStore = create<HashStore>(set => ({
  loading: false,
  setLoading: () =>
    set(state => {
      return { loading: !state.loading };
    }),
  hashes: [],
  setHashes: (newHashes: Array<number>) =>
    set(state => {
      return { hashes: newHashes };
    })
}));

export default useHashStore;
