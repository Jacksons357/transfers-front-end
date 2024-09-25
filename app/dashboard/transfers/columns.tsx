import { ColumnDef } from '@tanstack/react-table'

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

export const columns: ColumnDef<Transfer>[] = [
  {
    accessorKey: "product",
    header: "Produto"
  },
  {
    accessorKey: "code",
    header: "Código"
  },
  {
    accessorKey: "quantity",
    header: "Quantidade"
  },
  {
    accessorKey: "lote",
    header: "Lote"
  },
  {
    accessorKey: "validate",
    header: "Validade"
  },
  {
    accessorKey: "destiny",
    header: "Destino"
  },
  {
    accessorKey: "createdAt",
    header: "Data de criação"
  },
  {
    accessorKey: "status",
    header: "Status"
  },
]