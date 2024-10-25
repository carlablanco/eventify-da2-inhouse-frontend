'use client';

import React, { ReactNode } from 'react';
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';

export default function ProfileLayout({ children }: { children: ReactNode }) {
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
