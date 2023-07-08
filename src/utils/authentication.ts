import {postRequest} from "utils/axios";
import {getRefreshToken} from "utils/user";

export function isAuthenticated() {
    return localStorage.getItem("access") !== null;
}

export async function refreshAccessToken(refresh_token:string) {
    return postRequest("/auth/refresh", {
        refresh_token: refresh_token
    })

}