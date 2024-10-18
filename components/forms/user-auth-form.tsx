import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/contexts/UserContext';
import { loginUser } from '@/api/api';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  email: z.string().email({ message: 'Ingresá un correo electrónico válido' }),
  password: z.string()
});

type UserFormValue = z.infer<typeof formSchema>;

function UserAuthForm() {
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const { setUser, setToken } = useUserContext();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (formValues: UserFormValue) => {
    setLoading(true);

    try {
      const data = await loginUser(formValues);
      sessionStorage.setItem('user', JSON.stringify(data.user));
      sessionStorage.setItem('token', data.token);
      setUser(data.user);
      setToken(data.token);
      setCheck(true);
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Algo salió mal.',
        description: 'Hubo un problema al ingresar. Intentá nuevamente.'
      });
      console.error('Login failed:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (check) {
      router.push('/dashboard');
    }
  }, [check]);

  if (check) {
    return (
      <div className="flex h-full items-center p-4 lg:p-8">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Ingresa tu email"
                  disabled={loading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" disabled={loading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} className="ml-auto w-full" type="submit">
          Ingresar
        </Button>
      </form>
    </Form>
  );
}

export default UserAuthForm;
