"use client";

import Button from "@/app/ui/card/button";
import Card from "@/app/ui/card/card";
import Input from "@/app/ui/card/input";
import Link from "next/link";

export default function Page() {
  function handleLogin(): void {

  }

  return (
    <Card title="Login">
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
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don't have an account yet?{" "}
          <Link
            href="/signup"
            className="font-bold text-primary-600 hover:underline dark:text-primary-500"
          >
            Signup here
          </Link>
        </p>
      </form>
    </Card>
  );
}
