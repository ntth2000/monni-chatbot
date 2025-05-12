"use server";

import { z } from "zod";
import { login, signup } from "./api/auth";

interface User {
  username: string;
  password: string;
}

const SignupFormSchema = z.object({
  username: z
    .string()
    .min(6, { message: "Username must be at least 6 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" })
    .regex(/^\S+$/, { message: "Username must not contain spaces" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export async function signupAction({ username, password }: User) {
  console.log("username, password", username, password);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    }
  );

  const data = await res.json();
  if (!res.ok) {
    const error: any = new Error(data.message || "Register failed.");
    error.status = res.status;
    throw error;
  }
}
