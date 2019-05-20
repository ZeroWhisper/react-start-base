import { call, put } from "redux-saga/effects";
// import { call, cps } from "redux-saga/effects";
// O CPS Acima funciona como callback IMPORTANTE ESTUDAR!!!

import { login } from "../../services/api";

import { Creators as LoginActions } from "../ducks/login";

export function* loginRequest(action) {
  try {
    // const url = "auth/login_check";
    const { data, status } = yield call(login, action.payload);
    if (status === 200) {
      yield put(LoginActions.loginSuccess(data));
    }
  } catch (error) {
    console.log(error);
  }
}
