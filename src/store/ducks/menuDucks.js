const initialState = {
  isVisible: false,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MENU":
      return {
        isVisible: true,
      };
    case "HIDE_MENU":
      return {
        ...state,
        isVisible: false,
      };
    default:
      return state;
  }
};

export default menuReducer;
