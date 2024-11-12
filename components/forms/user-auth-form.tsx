import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/contexts/UserContext';
import { loginUser } from '@/api/api';
import { LoaderIcon } from 'lucide-react';
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
import Cookies from 'js-cookie';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  email: z.string().email({ message: 'Ingresá un correo electrónico válido' }),
  password: z.string()
});

const defaultValues = {
  email: '',
  password: ''
};

type UserFormValue = z.infer<typeof formSchema>;

function UserAuthForm() {
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const { setUser, setToken, isLogged, user } = useUserContext();
  const router = useRouter();
  const [redirectUrl, setRedirectUrl] = useState('/dashboard');
  const { toast } = useToast();

  useEffect(() => {
    if (isLogged) {
      router.push('/dashboard');
    }
  }, [isLogged]);

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const onSubmit = async (
    formValues: UserFormValue,
    event: React.FormEvent
  ) => {
    event.preventDefault();
    setLoading(true);

    try {
      const data = await loginUser(formValues);
      sessionStorage.setItem('user', JSON.stringify(data.user));
      data.redirectUrl ? setRedirectUrl(data.redirectUrl) : '/dashboard';
      Cookies.set('token', data.token, { expires: 7, path: '/' });
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
      router.push(`${redirectUrl}`);
    }
  }, [check]);

  return (
    <Form {...form}>
      <form
        onSubmit={(event) =>
          form.handleSubmit((data) => onSubmit(data, event))(event)
        }
        className="w-full space-y-2"
      >
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
                  autoComplete={'email'}
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
                <Input
                  type="password"
                  autoComplete={'current-password'}
                  placeholder="Ingresa tu contraseña"
                  disabled={loading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} className="ml-auto w-full" type="submit">
          {loading ? <LoaderIcon className={cn('animate-spin')} /> : 'Ingresar'}
        </Button>
      </form>
    </Form>
  );
}

export default UserAuthForm;
