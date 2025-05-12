"use client";

import Button from "@/app/ui/button";
import Card from "@/app/ui/card/card";
import Input from "@/app/ui/card/input";
import Logo from "@/app/ui/icons/logo";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [errorMsg, setErrorMsg] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username")?.toString().trim() || "";
    const password = formData.get("password")?.toString().trim() || "";

    
  };

  const handleShowPassword = async () => {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

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
            error={""}
            name="username"
          />
          <Input
            id="password"
            label="Password"
            placeholder="Password"
            name="password"
            type={passwordType}
            error={""}
            handleShowPassword={handleShowPassword}
          />
          <Button>Login</Button>
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
