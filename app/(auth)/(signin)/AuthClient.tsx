'use client';

import UserAuthForm from '@/components/forms/user-auth-form';
import Link from 'next/link';

export default function AuthClient() {
  return (
    <div className="flex h-full items-center p-4 lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Iniciar sesión
          </h1>
          <p className="text-sm text-muted-foreground">
            Ingresa con tus credenciales para continuar a la plataforma
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Al hacer clic en continuar, aceptas nuestra{' '}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Términos y condiciones
          </Link>{' '}
          y{' '}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Políticas de Privacidad
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
