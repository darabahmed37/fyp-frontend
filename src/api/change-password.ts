import {postRequest} from "utils/axios";
import axios from "axios";

export async function changePassword(oldPassword: string, newPassword:  string) {
    const response = await postRequest(
        "/auth/changePassword",
        {
            oldPassword,
            newPassword,
        }
    );

    return response.data;
}
