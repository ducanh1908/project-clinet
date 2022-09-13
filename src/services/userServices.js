import axios from "axios";
import { loginSuccess } from "../redux/slices/userSlice";

const baseUrl = "http://localhost:8080/";

export const login = async ({ email, password }, dispath) => {
  const res = await axios.post(baseUrl + "login", { email, password });
  dispath(loginSuccess({ user: res.data }));
};
