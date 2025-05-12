import { z } from "zod";

export const SignupFormSchema = z.object({
  username: z.string().regex(/^[A-Za-z0-9]{6,20}$/, {
    message:
      "Username must be 6–20 characters long and contain only letters and numbers.",
  }),
  password: z
    .string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d).{12,}$/, {
      message: "Password must have letters & numbers.",
    }),
});

export type AuthFormValues = z.infer<typeof SignupFormSchema>;
