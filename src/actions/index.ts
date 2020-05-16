import axios from "axios";
import { User } from "../store/types";

export const sigin = (user: User): Promise<User> => {
  return axios.post("/auth/sign", { user }).then((response) => response.data);
};
