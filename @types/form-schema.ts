import { z } from "zod";

export const formLoginSchema = z.object({
  username: z
    .string()
    .min(4, {message: 'O nome de usuário deve ter no mínimo 4 caracteres'})
    .max(6, {message: 'O nome de usuário deve ter no máximo 6 caracteres'}),
  password: z
    .string()
    .min(4, {message: 'A senha deve ter no mínimo 4 caracteres'})
    .max(6, {message: 'A senha deve ter no máximo 6 caracteres'})
})

export const formNewTransfer = z.object({
  code: z
    .string()
    .min(1, {message: 'Deve ser informado o código de barras.'}),
  quantity: z
    .string()
    .min(1, {message: 'Deve ser informado a quantidade.'}),
  lote: z.string(),
  validate: z.string(),
  destination: z
    .string()
    .min(2, {message: 'Deve ser informado a loja de destino.'}),
})