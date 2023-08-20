import { getRequest } from "utils/axios";
import axios from "axios";
import { BASE_BACKEND_URL } from "config";

export async function validUserName(name: string | undefined) {
  if (!name) return false;
  let response = await getRequest(
    `${BASE_BACKEND_URL}/user/checkUserName?username=${name}`,
    axios,
  );
  return response.data;
}
