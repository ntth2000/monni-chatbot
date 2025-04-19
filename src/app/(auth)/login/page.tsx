"use client";

import Button from "@/app/ui/button";
import Card from "@/app/ui/card/card";
import Input from "@/app/ui/card/input";
import Logo from "@/app/ui/icons/logo";
import Link from "next/link";

export default function Page() {
  function handleLogin(): void {}

  return (
    <>
      <div className="flex flex-row justify-center items-center space-x-2 mb-4">
        <Logo width="48px" height="48px" />
        {/* <h2 className="text-2xl md:text-3xl font-medium">Monni</h2> */}
      </div>
      <Card title="Login to use Monni">
        <form className="space-y-4 md:space-y-6" action="#">
          <Input
            id="username"
            label="Username"
            placeholder="Username"
            type="text"
            required={true}
          />
          <Input
            id="password"
            label="Password"
            placeholder="Password"
            type="text"
            required={true}
          />
          <Button onClick={handleLogin}>Login</Button>
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
