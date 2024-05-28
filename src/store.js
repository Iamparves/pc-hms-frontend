import { create } from "zustand";

export const useStore = create((set) => {
  return {
    loggedIn: false,
    user: null,
    specialities: [],
    setUser: (user) => {
      if (user) {
        set({ user, loggedIn: true });
      } else {
        set({ user: null, loggedIn: false });
      }
    },
    setSpecialities: (specialities) => set({ specialities }),
  };
});
