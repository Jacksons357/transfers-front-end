import { columns, Transfer } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Transfer[]>{
  return [
    {
      product: "forxiga",
      code: "789354762738",
      quantity: "1",
      destiny: "40",
      lote: "teste",
      validate: "teste",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: "enviado"
    },
    {
      product: "forxiga",
      code: "789354762738",
      quantity: "1",
      destiny: "40",
      lote: "teste",
      validate: "teste",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: "pendente",
    },
  ]
}

export default async function Page(){
  const data = await getData()

  return (
    <main>
      <h1 className="text-2xl font-semibold mb-5">Pendentes</h1>
      <DataTable columns={columns} data={data} />
    </main>
  )
}