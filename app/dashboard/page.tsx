'use client';

import React from 'react';
import { GeneralDashboard } from '@/app/dashboard/general-dashboard';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';

const breadcrumbItems = [{ title: 'Panel', link: '/dashboard' }];

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <GeneralDashboard />
      </div>
    </PageContainer>
  );
}
