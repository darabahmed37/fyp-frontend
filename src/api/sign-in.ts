import {postRequest} from "utils/axios";
import axios from "axios";

export async function signIn(username: string, password: string) {
    const response = await postRequest(
        "/auth/signin",
        {
            username,
            password,
        },
        axios,
    );

    return response.data;
}
