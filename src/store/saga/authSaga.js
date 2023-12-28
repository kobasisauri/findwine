import AsyncStorage from "@react-native-async-storage/async-storage";
import { put } from "redux-saga/effects";
import axiosInstance from "../../services/axios";
import { setUserDataAction } from "../ducks/authDucks";
import notificationService from "../../services/notify";
import { t } from "../../translation/index";

export function* signInSaga(payload) {
  console.log(payload.data);
  try {
    const res = yield axiosInstance.post("/auth", payload.data);
    console.log(res);
    yield AsyncStorage.setItem("token", res?.token);
    yield AsyncStorage.setItem("userData", JSON.stringify(res?.user));
    yield AsyncStorage.setItem("role", res?.user?.role);
    yield put(setUserDataAction(res?.user));

    payload.callback();
  } catch (error) {
    notificationService.notify("warning", t("error"), t("incorectUser"));
  }
}

export function* resetPasswordSaga(payload) {
  try {
    yield axiosInstance.put("account/reset_password", {
      email: payload.email,
    });
    payload.callback();
  } catch (error) {
    notificationService.notify("warning", "Note", error.response?.data.message);
  }
}

export function* signUpSaga(payload) {
  try {
    const res = yield axiosInstance.post("/register", payload.data);
    yield AsyncStorage.setItem("token", res.accessToken);
    yield put(setUserDataAction(res));
    payload.callback();
  } catch (error) {
    yield put(
      notificationService.notify(
        "warning",
        "Note",
        error.response?.data.message,
        true
      )
    );
  }
}

export function* logoutSaga() {
  try {
    setTimeout(() => {
      AsyncStorage.removeItem("token");
      AsyncStorage.removeItem("role");
      AsyncStorage.removeItem("userData");
    }, 1000);
  } catch (error) {
    yield notificationService.notify(
      "error",
      "Error",
      "Something went wrong",
      true
    );
  }
}

// export function* checkSignedInSaga(payload) {
//   try {
//     const userData = yield axiosInstance.get(
//       'ping',
//     );
//     if (userData.accessToken) {
//       yield AsyncStorage.setItem('token', userData.accessToken);
//     }
//     yield put(setUserDataAction(userData));
//     yield put(checkedSignedInAction(true));
//     payload.callback();
//   } catch (error) {
//     yield put(checkedSignedInAction(false));
//   }
// }
