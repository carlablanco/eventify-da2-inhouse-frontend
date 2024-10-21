'use client';

import React, { ReactElement } from 'react';
import { useUserContext } from '@/contexts/UserContext';
import { usePathname } from 'next/navigation';

export function AuthComponent({ children }: any): ReactElement {
  const { isLogged } = useUserContext();

  const currentPath = usePathname();

  if (!isLogged && typeof window !== 'undefined' && currentPath !== '/') {
    window.location.href = '/';
  }

  return <>{children}</>;
}
