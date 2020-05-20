import axios from "axios";
import { User, Options } from "../store/types";

export const fetchData = (options: Options) => {
  const coursesPromise = fetchCourses(options);
  return {
    user: wrapPromise(coursesPromise),
  };
};

const wrapPromise = (promise: Promise<any>) => {
  //Set Initial Status
  let status = "pending";
  //Store result
  let result: any;
  //Wait for promise
  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else {
        return result;
      }
    },
  };
};

export const sigin = (user: User): Promise<User> => {
  return axios.post("/api/auth/sign", user).then((response) => response.data);
};

export const signup = (user: User): Promise<User> => {
  return axios
    .post("/api/auth/signup", { user })
    .then((response) => response.data);
};

//fetch courses
export const fetchCourses = (option: Options) => {
  return axios
    .get("/api/courses", {
      data: option,
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
};
