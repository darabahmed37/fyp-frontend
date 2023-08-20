import axios from "utils/axios";
import { User } from "utils/types";

export function setAccessToken(accessToken: string) {
  localStorage.removeItem("access");

  localStorage.setItem("access", accessToken);
}

export function getAccessToken() {
  return localStorage.getItem("access");
}

export function setRefreshToken(refreshToken: string) {
  localStorage.removeItem("refresh");
  localStorage.setItem("refresh", refreshToken);
}

export function getRefreshToken() {
  return localStorage.getItem("refresh");
}

export function logOut() {
  localStorage.clear();
  delete axios.defaults.headers.common["Authorization"];
  window.location.href = "/";
}

export function getUser() {
  const userString = localStorage.getItem("user");
  if (userString) return JSON.parse(userString) as User;
  else return null;
}
