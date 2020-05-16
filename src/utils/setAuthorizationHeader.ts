import axios from "axios";

export default function setAuthorizationHeader(token?: String) {
  if (token) axios.defaults.headers["authorization"] = `Bear ${token}`;
  else delete axios.defaults.headers.authorization;
}
