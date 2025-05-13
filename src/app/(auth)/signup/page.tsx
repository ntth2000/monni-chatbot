"use client";

import { signupAction } from "@/app/lib/api/auth";
import { SignupFormSchema } from "@/app/lib/validations";
import Card from "@/app/ui/card/card";
import Input from "@/app/ui/card/input";
import Logo from "@/app/ui/icons/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [messages, setMessages] = useState({
    errors: { username: "", password: "", common: "" },
    success: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const router = useRouter();

  const handleSignup = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username")?.toString().trim() || "";
    const password = formData.get("password")?.toString().trim() || "";

    const validationResult = SignupFormSchema.safeParse({ username, password });

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
        const msg = await signupAction({ username, password });
        setMessages({
          success: msg,
          errors: {
            username: "",
            password: "",
            common: "",
          },
        });

        setTimeout(() => {
          router.push("/login");
        }, 500);
      } catch (e: any) {
        setMessages({
          success: "",
          errors: {
            username: "",
            password: "",
            common: e.message || "Something went wrong. Please try again.",
          },
        });
      }
    }
  };

  const handleShowPassword = async () => {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center space-x-2 mb-4">
        <Logo width="48px" height="48px" />
        <h2 className="text-3xl md:text-4xl font-bold">Monni</h2>
      </div>

      <Card title="Create an account">
        <form
          className="space-y-2 md:space-y-4"
          onSubmit={handleSignup}
          method="POST"
        >
          <Input
            label="Username"
            id="username"
            placeholder="Username"
            type="text"
            name="username"
            hint="6-20 characters, only letters and numbers and no spaces."
            error={messages?.errors?.username}
          />
          <Input
            label="Password"
            id="password"
            placeholder="Password"
            type={passwordType}
            name="password"
            handleShowPassword={handleShowPassword}
            hint="At least 12 characters, including letters and numbers."
            error={messages?.errors?.password}
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
            Signup
          </button>
          <p className="text-center font-light secondary-text">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-primary hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </Card>
    </>
  );
}
