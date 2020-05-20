import axios from "axios";
import { User, Options } from "../store/types";

export const sigin = (user: User): Promise<User> => {
  return axios.post("/api/auth/sign", user).then((response) => response.data);
};

export const signup = (user: User): Promise<User> => {
  return axios
    .post("/api/auth/signup", { user })
    .then((response) => response.data);
};

export const courses = (option: Options) => {
  return axios
    .get("/api/courses", {
      data: option,
    })
    .then((response) => response.data);
};
