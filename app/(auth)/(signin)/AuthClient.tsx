// AuthClient.tsx
'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import UserAuthForm from '@/components/forms/user-auth-form';
import Link from 'next/link';

export default function AuthClient() {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  // Si el usuario no está autenticado, mostrar el formulario de inicio de sesión
  if (isAuthenticated) {
    return null; // O un loader o algo que indique que se está redirigiendo
  }

  return (
    <div className="flex h-full items-center p-4 lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Crea una cuenta
          </h1>
          <p className="text-sm text-muted-foreground">
            Ingrese su correo electrónico a continuación para crear su cuenta
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Al hacer clic en continuar, aceptas nuestra{' '}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terminos y condiciones
          </Link>{' '}
          y{' '}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Politicas de Privacidad
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
