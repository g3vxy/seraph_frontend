import create from "zustand";

export type ThemeTypes = "light" | "dark";

type ThemeStore = {
  theme: ThemeTypes;
  toggle: () => void;
};

const useThemeStore = create<ThemeStore>(set => ({
  theme: "light",
  toggle: () =>
    set(state => {
      if (state.theme === "light") {
        document.documentElement.classList.add("dark");
        return { theme: "dark" };
      } else {
        document.documentElement.classList.remove("dark");
        return { theme: "light" };
      }
    })
}));

export default useThemeStore;
