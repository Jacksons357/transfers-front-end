'use client'

import { formNewTransfer } from "@/@types/form-schema";
import HomeForm from "@/components/home/home-form";
import { z } from "zod";

export default function Transfers() {
  function handleFormSubmit(values: z.infer<typeof formNewTransfer>){
    console.log(values)
  }

  return (
    <main>
      <HomeForm 
        onSubmitForm={handleFormSubmit}
      />
    </main>
  )
}