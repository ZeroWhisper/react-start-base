import { call, cps } from "redux-saga/effects";
// O CPS Acima funciona como callback IMPORTANTE ESTUDAR!!!

import api from "../../services/api";

import { Creators as LoginActions } from "../ducks/login";

export function* loginRequest(action) {
  try {
    const url = "";
    // const response = yield call(api, get, url);
  } catch (error) {
    console.log(error);
  }
}
