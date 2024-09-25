// components/layout/providers.tsx
'use client';

import React from 'react';
import ThemeProvider from './ThemeToggle/theme-provider';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';
import { Provider as ReduxProvider } from 'react-redux'; // Importa el Provider de Redux
import { store } from '@/store/store'; // Asegúrate de que la ruta del store es correcta

export default function Providers({
  session,
  children
}: {
  session: SessionProviderProps['session'];
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider session={session}>
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
