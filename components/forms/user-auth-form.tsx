'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  email: z.string().email({ message: 'Ingresá un correo electrónico válido' }),
  password: z.string(),
  redirectUrl: z.string().optional()
});

type UserFormValue = z.infer<typeof formSchema>;

function UserAuthForm() {
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const { setUser, setToken, isLogged } = useUserContext();
  const router = useRouter();
  const [redirectUrl, setRedirectUrl] = useState('');
  const { toast } = useToast();
  const params = useSearchParams();
  const hasRedirectUrl = params.has('redirectUrl');

  useEffect(() => {
    if (isLogged) {
      router.push(redirectUrl);
    }
  }, [isLogged]);

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      redirectUrl: hasRedirectUrl
        ? (params.get('redirectUrl') ?? undefined)
        : undefined
    }
  });

  const onSubmit = async (formValues: UserFormValue) => {
    setLoading(true);
    try {
      const data = await loginUser(formValues);
      const actualData = {
        ...data,
        redirectUrl:
          params.get('redirectUrl') ?? formValues.redirectUrl ?? '/dashboard'
      };
      sessionStorage.setItem('user', JSON.stringify(actualData.user));
      setRedirectUrl(actualData.redirectUrl);
      setUser(actualData.user);
      setToken(actualData.token);
      setCheck(true);
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Algo salió mal.',
        description: 'Hubo un problema al ingresar. Intentá nuevamente.'
      });
      console.error('Error en el login: ', err);
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

export default function SuspendedUserAuthForm() {
  return (
    <Suspense
      fallback={
        <div className={'space-y-2'}>
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      }
    >
      <UserAuthForm />
    </Suspense>
  );
}
