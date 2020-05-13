export const USER_LOGIN: String = "USER_LOGIN";
export const USER_LOGOUT: String = "USER_LOGOUT";
export const COURSE_LIST: String = "COURSE_LIST";
export const SUBSCRIB_COURSE: String = "SUBSCRIB_COURSE";

export interface User {
  username?: String;
  passwords?: String;
}

export interface Token {
  token: String;
}

export interface Course {
  id: String;
  title: String;
  dates: String;
  price: Number;
}

export interface Subscription {
  user: User;
  course: Course;
  dates: String;
}

export interface Login {
  type: typeof USER_LOGIN;
  playload: User;
}

export interface Logout {
  type: typeof USER_LOGOUT;
  playload?: any;
}

export interface Courses {
  type: typeof COURSE_LIST;
}

export interface UserState {
  user: User;
}

export interface SubscriptionSate {
  courses: Subscription[];
}

export type UserActionType = Login | Logout;
