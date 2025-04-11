import  { create } from "zustand";
import { persist } from "zustand/middleware";


type Theme = "light" | "dark";

interface ThemeStore {
    theme: Theme;
    toggleTheme: () => void;
}

//Check if the user already has a preferred color theme by using window.matchMedia.
const useThemeStore = create<ThemeStore>()(
    persist((set, get) => ({
        theme: typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : "light",
        toggleTheme: () => {
            const newTheme = get().theme === "light" ? "dark" : "light";
            if(typeof document !==  "undefined") {
                document.documentElement.classList.toggle("dark", newTheme === "dark");
            }
            set({theme: newTheme});
        },
    }), {name: "theme"})
);

//Keep track of theme through local storage.