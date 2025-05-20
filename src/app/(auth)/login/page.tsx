"use client";

import { showToast } from "@/app/ui/toast-message";
import { loginAction, refreshTokenAction } from "@/app/lib/api/auth";
import { LoginFormSchema } from "@/app/lib/validations";
import Card from "@/app/ui/card/card";
import Input from "@/app/ui/card/input";
import Logo from "@/app/ui/icons/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CustomError } from "@/app/lib/utils/errors";

export default function Page() {
  const [messages, setMessages] = useState({
    errors: { username: "", password: "", common: "" },
    success: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const router = useRouter();

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username")?.toString().trim() || "";
    const password = formData.get("password")?.toString().trim() || "";

    const validationResult = LoginFormSchema.safeParse({ username, password });

    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;

      setMessages({
        errors: {
          username: errors.username?.[0] || "",
          password: errors.password?.[0] || "",
          common: "",
        },
        success: "",
      });
    } else {
      try {
        await loginAction({ username, password });
        setMessages({
          success: "",
          errors: {
            username: "",
            password: "",
            common: "",
          },
        });

        const { show, close } = showToast("Đăng nhập thành công");
        show();

        setTimeout(() => {
          close();
          router.push("/");
        }, 500);
      } catch (e: CustomError | any) {
        if (e.status === 401) {
          setMessages({
            success: "",
            errors: {
              username: "",
              password: "",
              common: "Sai tên đăng nhập hoặc mật khẩu.",
            },
          });
        } else {
          setMessages({
            success: "",
            errors: {
              username: "",
              password: "",
              common: "Đã có lỗi xảy ra, vui lòng thử lại.",
            },
          });
        }
      }
    }
  };

  const handleShowPassword = async () => {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  useEffect(() => {
    const tryRefresh = async () => {
      const res = await refreshTokenAction();

      if (res.status === 200) {
        router.push("/");
      }
    };

    tryRefresh();
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center items-center space-x-2 mb-4">
        <Logo width="48px" height="48px" />
        {/* <h2 className="text-2xl md:text-3xl font-medium">Monni</h2> */}
      </div>
      <Card title="Login to use Monni">
        <form className="space-y-2 md:space-y-4" onSubmit={handleLogin}>
          <Input
            id="username"
            label="Username"
            placeholder="Username"
            type="text"
            error={messages?.errors?.username}
            name="username"
          />
          <Input
            id="password"
            label="Password"
            placeholder="Password"
            name="password"
            type={passwordType}
            error={messages?.errors?.password}
            handleShowPassword={handleShowPassword}
          />
          {messages?.errors?.common && (
            <p className="text-xs text-red-500 min-h-5 pt-1">
              {messages?.errors?.common}
            </p>
          )}
          {messages?.success && (
            <p className="text-xs text-primary min-h-5 pt-1">
              {messages?.success}
            </p>
          )}
          <button
            type="submit"
            className={`w-full text-white bg-primary hover:bg-secondary hover:cursor-pointer font-medium rounded-full px-3 md:px-5 py-2.5 text-center`}
          >
            Login
          </button>
          <p className="text-center font-light text-secondary-text">
            Don't have an account yet?{" "}
            <Link
              href="/signup"
              className="font-bold text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </Card>
    </>
  );
}
