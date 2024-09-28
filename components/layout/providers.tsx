// components/layout/providers.tsx
'use client';

import React from 'react';
import ThemeProvider from './ThemeToggle/theme-provider';
import { Provider as ReduxProvider } from 'react-redux'; // Importa el Provider de Redux
import store from '@/store/store'; // Asegúrate de que la ruta del store es correcta

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </ThemeProvider>
  );
}
