'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { formLoginSchema } from "@/@types/form-schema"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '../ui/form';
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function ProfileForm(){
  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formLoginSchema>) {
    console.log(values)
    form.reset()
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className='space-y-8 bg-muted-foreground/10 p-10 rounded-xl w-[500px]'
      >
        <h1 className='text-center'>Login</h1>
        <FormField 
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuário</FormLabel>
              <FormControl>
                <Input 
                  placeholder='Informe seu usuário de acesso' 
                  { ...field }
                />
              </FormControl>
              <FormMessage className='' />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input 
                  placeholder='Informe a senha' 
                  { ...field }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type='submit' 
          variant={'default'} 
          className='w-full bg-muted-foreground hover:bg-muted-foreground/85'
        >
          Entrar
        </Button>
      </form>
    </Form>
  )
}