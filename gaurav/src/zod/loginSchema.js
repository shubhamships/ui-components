import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(6, "Password must be at least 6 or more characters long")
  .max(20, "Password must be at most 20 characters long"),
})
