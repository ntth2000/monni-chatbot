"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface User {
  username: string;
  password: string;
}

export async function signupAction({ username, password }: User) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    }
  );

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message);
  } else {
    const data = await res.text();
    return data;
  }
}

export async function loginAction({ username, password }: User) {
  console.log("username, password", username, password);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    }
  );

  const contentType = res.headers.get("Content-Type");
  let data: any;

  try {
    if (contentType?.includes("application/json")) {
      data = await res.json();
    } else {
      const text = await res.text();
      throw new Error(text);
    }
  } catch (err) {
    throw new Error("Invalid response from server.");
  }

  if (!res.ok) {
    const error = new Error(data.message || "Login failed");
    (error as any).status = res.status;
    throw error;
  }

  const { accessToken, refreshToken } = data;

  const cookieStore = await cookies();
  cookieStore.set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60,
  });

  cookieStore.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });

  return data.message || "Login successful";
}

export async function logoutAction() {
  const cookieStore = await cookies();

  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (refreshToken) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/logout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Refresh-Token": refreshToken,
        },
        credentials: "include",
      }
    );
    console.log("res", res);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      const message = data.message || "Failed to logout from server";
      const status: number = res.status;

      if (status === 401 || status === 403) {
        console.warn("Token expired or invalid:", message);
      } else {
        // Nếu là lỗi nghiêm trọng khác → throw
        throw new Error(message);
      }
    }
  }

  cookieStore.set("accessToken", "", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });

  cookieStore.set("refreshToken", "", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });

  redirect("/login?fromLogout=true");
}
