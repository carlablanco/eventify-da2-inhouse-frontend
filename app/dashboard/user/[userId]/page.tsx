import { Breadcrumbs } from '@/components/breadcrumbs';
import { UserForm } from '@/components/forms/user-form';
import PageContainer from '@/components/layout/page-container';
import React from 'react';

const breadcrumbItems = [
  { title: 'Panel', link: '/dashboard' },
  { title: 'Usuarios', link: '/dashboard/user' },
  { title: 'Create', link: '/dashboard/user/create' }
];

export default function Page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <UserForm key={null} />
      </div>
    </PageContainer>
  );
}
