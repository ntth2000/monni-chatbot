import Button from "@/app/ui/card/button";
import Card from "@/app/ui/card/card";
import Input from "@/app/ui/card/input";
import Link from "next/link";

export default function Page() {
  function handleSignup(): void {
    console.log("heello");
  }
  return (
    <Card title="Signup">
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
      <Button onClick={handleSignup}>Signup</Button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-bold text-primary-600 hover:underline dark:text-primary-500"
        >
          Login here
        </Link>
      </p>
    </Card>
  );
}
