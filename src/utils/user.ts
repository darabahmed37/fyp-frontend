import axios from "utils/axios";

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
