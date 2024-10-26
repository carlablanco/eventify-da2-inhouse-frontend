'use client';

import React from 'react';
import BenefitsMain from '@/app/benefits/benefits-main';
import PageContainer from '@/components/layout/page-container';
import { Breadcrumbs } from '@/components/breadcrumbs';

const breadcrumbItems = [{ title: 'Beneficios', link: '/benefits' }];

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <BenefitsMain />
      </div>
    </PageContainer>
  );
}
