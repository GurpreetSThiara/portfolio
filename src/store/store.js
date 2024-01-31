import create from 'zustand';

export const useStore = create((set) => ({
  isNavbarOpen: true,
  toggleNavbar: () => set((state) => ({ isNavbarOpen: !state.isNavbarOpen })),
}));

