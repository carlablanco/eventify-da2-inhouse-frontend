import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import ProfilePage from '@/app/profile/profile-main';

const breadcrumbItems = [{ title: 'Perfil', link: '/profile' }];

export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <ProfilePage />
      </div>
    </PageContainer>
  );
}
