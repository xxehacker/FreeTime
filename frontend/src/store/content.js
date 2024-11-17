import { create } from "zustand";

const useContentStore = create((set) => ({
  contentType: "movie",
  setContentType: (contentType) => set({ contentType }),
}));

export default useContentStore;