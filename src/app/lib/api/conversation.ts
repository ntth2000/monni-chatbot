"use server";

import { cookies } from "next/headers";
import { Conversation } from "../definitions";

export async function createNewQuestionAction(question: string): Promise<Conversation> {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  console.log("token", token);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/conversation`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ question }),
      credentials: "include",
    }
  );
  console.log("res", res);
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    const error = await res.json().catch(() => ({})); // phòng trường hợp response không parse được JSON
    const message = error.message || "Failed to fetch conversations";

    throw new Error(message);
  }
}

export async function getAllConversationAction(): Promise<Conversation[]> {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  console.log("token", token);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/conversation`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    }
  );
  console.log("res", res);
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    const error = await res.json().catch(() => ({})); // phòng trường hợp response không parse được JSON
    const message = error.message || "Failed to fetch conversations";

    throw new Error(message);
  }
}
