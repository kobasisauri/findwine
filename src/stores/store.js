import { create } from "zustand";

const initialUserData = {
  country: "",
  email: "",
  full_name: "",
  id: null,
  phone: "",
  role: "",
};

const notification = {
  isVisible: false,
  type: "", // warning, error, success
  message: "",
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
  notification: notification,
  showNotification: (type, message) => {
    set(() => ({
      notification: {
        isVisible: true,
        type,
        message,
      },
    }));
  },
  hideNotification: () => {
    set(() => ({
      notification: notification,
    }));
  },
}));

export default useStore;
