/* eslint-disable default-param-last */
// export const CHECK_SIGNED_IN = "socialize/auth/checkSignedIn";
export const SET_USER_DATA = "socialize/auth/setUserData";
export const UPDATE_USER_DATA = "socialize/auth/updateUserData";
export const UPDATE_USER_ONBOARDING_DATA =
  "socialize/auth/updateUserOnboardingData";
export const REQUEST_SIGN_IN_SG = "socialize/auth/requestSignIn_sg";
export const RESET_PASSWORD = "socialize/auth/resetPassword_sg";
export const REQUEST_SIGN_UP_SG = "socialize/auth/requestSignUp_sg";
export const LOGOUT = "socialize/auth/logout";
export const CHECKED_SIGNED_IN = "socialize/main/checkedSignedIn";
export const CHECKED_LANG = "socialize/main/checkedLang";

const initialState = {
  userData: {},
  lang: "ge",
  isSignedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.userData,
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        userData: { ...state.userData, ...action.userData },
      };
    case UPDATE_USER_ONBOARDING_DATA:
      return {
        ...state,
        userData: {
          ...state.userData,
          onboarding: {
            ...state.userData.onboarding,
            ...action.onboardingData,
          },
        },
      };
    case CHECKED_SIGNED_IN:
      return {
        ...state,
        isLoading: false,
        isSignedIn: action.isSignedIn,
      };
    case CHECKED_LANG:
      return {
        ...state,
        isLoading: false,
        lang: action.lang,
      };
    default:
      return state;
  }
};

export const checkedLangInAction = (lang) => ({
  type: CHECKED_LANG,
  lang,
});

export const checkedSignedInAction = (isSignedIn) => ({
  type: CHECKED_SIGNED_IN,
  isSignedIn,
});

// export const checkSignedInAction = (callback) => ({
//   type: CHECK_SIGNED_IN,
//   callback,
// });

export const signInActionSG = (data, callback) => ({
  type: REQUEST_SIGN_IN_SG,
  data,
  callback,
});

export const resetPasswordActionSG = (email, callback) => ({
  type: RESET_PASSWORD,
  email,
  callback,
});

export const signUpActionSG = (data, callback) => ({
  type: REQUEST_SIGN_UP_SG,
  data,
  callback,
});

export const setUserDataAction = (userData) => ({
  type: SET_USER_DATA,
  userData,
});

export const updateUserDataAction = (userData) => ({
  type: UPDATE_USER_DATA,
  userData,
});

export const updateUserOnBoardingDataAction = (onboardingData) => ({
  type: UPDATE_USER_ONBOARDING_DATA,
  onboardingData,
});

export const logoutAction = () => ({
  type: LOGOUT,
});
