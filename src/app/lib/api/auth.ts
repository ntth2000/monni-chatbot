import api from "./axios-client";
import { CustomError } from "../utils/errors";
import { AxiosResponse } from "axios";
interface User {
  username: string;
  password: string;
}

export async function signupAction({ username, password }: User) {
  try {
    const res = await api.post("/auth/register", { username, password });
    if (res.status === 200) {
      return res.data;
    } else {
      throw new CustomError(
        res.data?.message || "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
        res.status
      );
    }
  } catch (error: CustomError | any) {
    throw error;
  }
}

export async function loginAction({ username, password }: User) {
  try {
    const res = await api.post(
      "/auth/login",
      { username, password },
      { headers: { "Content-Type": "application/json" } }
    );
    if (res.status === 200) {
      return res.data;
    } else {
      throw new CustomError(
        res.data?.message || "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
        res.status
      );
    }
  } catch (error: CustomError | any) {
    throw error;
  }
}

export async function logoutAction() {
  try {
    const res: AxiosResponse = await api.post("/auth/logout");
    if (res.status === 200) {
      return res.data;
    } else {
      throw new CustomError(
        res.data?.message || "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
        res.status
      );
    }
  } catch (error: CustomError | any) {
    throw error;
  }
}

export async function refreshTokenAction() {
  try {
    const res = await api.post("/auth/refresh", {}, { withCredentials: true });
    if (res.status === 200) {
      return res.data;
    } else {
      throw new CustomError(
        res.data?.message || "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
        res.status
      );
    }
  } catch (error: CustomError | any) {
    throw error;
  }
}
