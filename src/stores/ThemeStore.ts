import create from "zustand";

export type ThemeTypes = "light" | "dark";

type ThemeStore = {
  theme: ThemeTypes;
  toggle: () => void;
};

const useThemeStore = create<ThemeStore>(set => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return {
    theme: localStorage.theme,
    toggle: () =>
      set(state => {
        if (state.theme === "light") {
          document.documentElement.classList.add("dark");
          localStorage.theme = "dark";
          return { theme: "dark" };
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.theme = "light";
          return { theme: "light" };
        }
      })
  };
});

export default useThemeStore;
