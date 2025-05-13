import { z } from "zod";

export const SignupFormSchema = z.object({
  username: z.string().regex(/^[A-Za-z0-9]{6,20}$/, {
    message:
      "Username must be 6–20 characters long and contain only letters and numbers.",
  }),
  password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d).{12,}$/, {
    message: "Password must have letters & numbers.",
  }),
});

export const LoginFormSchema = z.object({
  username: z
    .string()
    .min(6, { message: "Username must be at least 6 characters long" })
    .regex(/^\S+$/, { message: "Username must not contain spaces" }),
  password: z
    .string()
    .min(12, { message: "Password must be at least 12 characters long" }),
});

export type LoginFormValues = z.infer<typeof LoginFormSchema>;
export type AuthFormValues = z.infer<typeof SignupFormSchema>;
