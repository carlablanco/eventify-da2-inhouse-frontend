import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import ProfilePage from '@/components/profile/profile-page';

const breadcrumbItems = [{ title: 'Perfil', link: '/profile' }];

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <ProfilePage />
      </div>
    </PageContainer>
  );
}