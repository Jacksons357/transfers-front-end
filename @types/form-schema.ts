import { z } from "zod";

export const formSchema = z.object({
  username: z
    .string()
    .min(4, {message: 'O nome de usuário deve ter no mínimo 4 caracteres'})
    .max(6, {message: 'O nome de usuário deve ter no máximo 6 caracteres'}),
  password: z
    .string()
    .min(4, {message: 'A senha deve ter no mínimo 4 caracteres'})
    .max(6, {message: 'A senha deve ter no máximo 6 caracteres'})
})