import userReducer from "./reducers/user";
import cardReducer from "./reducers/card";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userReducer,
  card: cardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
