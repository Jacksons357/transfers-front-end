'use client'

import { formNewTransfer } from "@/@types/form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

interface HomeFormProps {
  onSubmitForm: (values: z.infer<typeof formNewTransfer>) => void
}
interface FormFieldProps {
  name: keyof z.infer<typeof formNewTransfer>
  label: string
  placeholder: string
}

const formFields: FormFieldProps[] = [
  { 
    name: 'code', 
    label: 'Código de barras', 
    placeholder: 'Escaneie o código de barras aqui...' 
  },
  { 
    name: 'quantity', 
    label: 'Quantidade',
    placeholder: 'Digite a quantidade' 
  },
  { 
    name: 'lote', 
    label: 'Lote (opcional)', 
    placeholder: 'Número do lote' 
  },
  { 
    name: 'validate', 
    label: 'Validade (opcional)', 
    placeholder: 'Data de validade' 
  },
  { 
    name: 'destination', 
    label: 'Destino', 
    placeholder: 'Destino do produto' 
  }
];

export default function HomeForm({ onSubmitForm }: HomeFormProps) {
  const form = useForm<z.infer<typeof formNewTransfer>>({
    resolver: zodResolver(formNewTransfer),
    defaultValues: {
      code: "",
      quantity: "",
      lote: "",
      validate: "",
      destination: "",
    }
  })

  function handleSubmit(values: z.infer<typeof formNewTransfer>){
    onSubmitForm(values)
    form.reset()
  }

  return (
    <div className="flex flex-col w-full justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-96 space-y-4"
        >
          <h1 className="font-semibold text-2xl border-b pb-2">Adicionar transferência</h1>
          {formFields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              render={( {field: formField}) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={field.placeholder}
                      {...formField}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit">Enviar</Button>
        </form>
      </Form>
    </div>
  )
}