import { create } from "zustand";

const initialUserData = {
  country: "",
  email: "",
  full_name: "",
  id: null,
  phone: "",
  role: "",
};

const useStore = create((set) => ({
  toke: "",
  userData: initialUserData,
  setToken: (token) => set(() => ({ token })),
  setUserData: (data) => set(() => ({ userData: data })),
  isMenuOpen: false,
  setMenu: (menu) => {
    set(() => ({ isMenuOpen: menu }));
  },
  logOut: () =>
    set(() => ({
      token: "",
      userData: initialUserData,
    })),
}));

export default useStore;
