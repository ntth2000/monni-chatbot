'use server'
 
import {z} from 'zod';
import sql from './database-setup';
 
type User = {
    username: string,
    password: string,
}
 
async function getUser(username: string): Promise<User | undefined> {
    try {
      const user = await sql<User[]>`SELECT * FROM users WHERE username=${username}`;
      return user[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }

export const AuthFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" })
    .regex(/^\S+$/, { message: "Username must not contain spaces" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
 
export type AuthFormValues = z.infer<typeof AuthFormSchema>;
 
 
export async function createAccount(
  prevState: string | undefined,
  formData: FormData
) {
    try {
        await Signup('')
    } catch (error) {
        if
    }
}