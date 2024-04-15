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

const searchFormSchema = z.object({
  term: z.string().min(1, { message: 'O campo é obrigatório' })
});

type searchFormData = z.infer<typeof searchFormSchema>;



export const SearchForm = () => {

  const form = useForm<searchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      term: '',
    }
  });

  const onSubmit = async (data: z.infer<typeof searchFormSchema>) => {   

    console.log(form, 'formState', data);
  };
  return (
    <div className='hidden lg:block w-full max-w-[790px] rounded-[10px] bg-[#efefef]'>
      <Form {...form}>
        <form className='flex items-center gap-x-6' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
            name="term"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="w-full flex items-center bg-transparent rounded-l-[10px] h-10 px-6 text-xs text-[#353535] outline-none"
                    placeholder="O Que Você Busca?" autoComplete='off'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button className='h-10 px-10 text-sm text-white bg-[#faa500] rounded-[10px]'>Buscar</button>
        </form>
      </Form>
    </div>
  )
}
