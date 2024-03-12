import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface TitleStore {
  title: string;
  index: boolean;
  prevRoute?: string | number;
  setStates: (
    title: string,
    index: boolean,
    prevRoute?: string | number
  ) => void;
}

export const useTitleStore = create<TitleStore>()(
  devtools((set) => ({
    title: "Default Title",
    index: true,
    prevRoute: undefined,
    setStates: (title: string, index: boolean, prevRoute?: string | number) =>
      set({ title, index, prevRoute }),
  }))
);
