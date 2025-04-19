"use client";

import Button from "@/app/ui/button";
import Card from "@/app/ui/card/card";
import Input from "@/app/ui/card/input";
import Logo from "@/app/ui/icons/logo";
import Link from "next/link";

export default function Page() {
  function handleSignup(): void {
    console.log("heello");
  }
  return (
    <>
      <div className="flex flex-row justify-center items-center space-x-2 mb-4">
        <Logo width="48px" height="48px" />
        <h2 className="text-3xl md:text-4xl font-bold">Monni</h2>
      </div>

      <Card title="Create an account">
        <Input
          label="Username"
          id="username"
          placeholder="Username"
          type="text"
          required={true}
        />
        <Input
          label="Password"
          id="password"
          placeholder="Password"
          type="text"
          required={true}
        />
        <Button onClick={handleSignup}>Sign up</Button>
        <p className="text-center font-light secondary-text">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-bold text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </Card>
    </>
  );
}
