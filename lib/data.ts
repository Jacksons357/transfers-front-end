
export type Transfer = {
  product: string
  code: string
  quantity: string
  destiny: string
  lote: string
  validate: string
  createdAt: string
  updatedAt: string
  status: "pendente" | "enviado"
}

export const transfers: Transfer[] = [
  {
    product: "forxiga",
    code: "789354762738",
    quantity: "1",
    destiny: "40",
    lote: "teste",
    validate: "teste",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "pendente"
  },
  {
    product: "fralda pompom",
    code: "789354733330",
    quantity: "1",
    destiny: "40",
    lote: "",
    validate: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "enviado"
  }
]