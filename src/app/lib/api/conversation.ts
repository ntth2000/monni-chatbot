import { AxiosResponse } from "axios";
import { Conversation } from "../definitions";
import { CustomError } from "../utils/errors";
import axiosClient from "./axios-client";

export async function createNewQuestionAction(
  question: string
): Promise<Conversation> {
  try {
    const res: AxiosResponse = await axiosClient.post(
      "/conversation",
      { question },
      { withCredentials: true }
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

export async function getAllConversationAction(): Promise<Conversation[]> {
  try {
    const res: AxiosResponse = await axiosClient.post(
      "/conversation",
      {},
      { withCredentials: true }
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
