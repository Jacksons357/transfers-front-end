'use client'

import { ColumnDef } from '@tanstack/react-table'
import { MdDelete } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";

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
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const transfer = row.original

      function handleApprove() {
        console.log('Aprovado', transfer)
      }

      function handleDelete() {
        console.log('Deletado', transfer)
      }

      return (
        <div className="flex items-center gap-4">
          <MdDelete 
            onClick={handleApprove} 
            size={30} 
            className='text-destructive hover:text-destructive/80 cursor-pointer' 
          />

          <FaCheckSquare
            onClick={handleDelete}
            size={30} 
            className='text-green-600 hover:text-green-400 cursor-pointer'
          />
        </div>
      )
    }
  }
]