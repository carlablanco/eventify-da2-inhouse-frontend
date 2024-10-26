import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { UserClient } from '@/components/tables/user-tables/client';
import { actualUsersMocked, User } from '@/constants/data';

const breadcrumbItems = [{ title: 'Usuarios', link: '/users' }];

export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <UserClient data={actualUsersMocked as User[]} />
      </div>
    </PageContainer>
  );
}
