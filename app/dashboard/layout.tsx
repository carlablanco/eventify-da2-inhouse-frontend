'use client';

import React, { ReactNode, useEffect } from 'react';
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import { redirect } from 'next/navigation';
import { useUserContext } from '@/contexts/UserContext';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { isLogged, user } = useUserContext();
  useEffect(() => {
    if (!isLogged) {
      redirect('/');
    }
  }, []);
  console.log({ isLogged }, { user });
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
}
