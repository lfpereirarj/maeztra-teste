import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '../Form';
import { Input } from '../Input';

const newsletterFormSchema = z.object({
  email: z.string().min(1, { message: 'O campo email é obrigatório' }).email({
    message: 'O e-mail deve ser válido'
  })
});

type newsletterFormData = z.infer<typeof newsletterFormSchema>;

type NewsletterProps = {
  children: React.ReactNode
}

export const Newsletter: React.FC<NewsletterProps> = ({ children }) => {

  const form = useForm<newsletterFormData>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: '',
    }
  });

  const onSubmit = async (data: z.infer<typeof newsletterFormSchema>) => {
    // saveNewsletterUser.mutate();

    console.log(form, 'formState', data);
  };
  return (
    <div className='newsletter'>
      <Form {...form}>
        <form className='flex items-center gap-x-6' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="w-full border border-[#353535] px-6 text-sm h-[26px] rounded bg-white flex items-center"
                    placeholder="Digite seu e-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          { children }
        </form>
      </Form>
      
    </div>
  )
}
