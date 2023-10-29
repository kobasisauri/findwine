let reduxStore;
export default {
  register: (store) => {
    reduxStore = store;
  },
  getStore: () => reduxStore,
};
