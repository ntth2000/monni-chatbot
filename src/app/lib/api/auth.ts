"use server";

import { cookies } from "next/headers";

export async function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error("Login failed");
  }

  const { accessToken, refreshToken } = await res.json();

  // Set cookies (server-side)
  const cookieStore = cookies();
  cookieStore.set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60, // 1 hour
  });

  cookieStore.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });
}

export async function signup({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    }
  );
  console.log("res", res);
  if (!res.ok) {
    throw new Error("Login failed");
  }
}
