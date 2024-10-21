import React, { ReactNode } from 'react';
import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthComponent } from '@/components/auth/auth-component';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eventify',
  description: 'Plataforma interna de la aplicación Eventify'
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} overflow-hidden`}>
        <NextTopLoader showSpinner={false} />
        <AuthComponent>
          <Providers>
            <Toaster />
            {children}
          </Providers>
        </AuthComponent>
      </body>
    </html>
  );
}
