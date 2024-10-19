'use client';

import React from 'react';
import ThemeProvider from './ThemeToggle/theme-provider';
import { UserProvider } from '@/contexts/UserContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
}
