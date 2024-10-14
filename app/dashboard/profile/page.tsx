import { Breadcrumbs } from '@/components/breadcrumbs';
import { CreateProfileOne } from '@/components/forms/user-profile-stepper/create-profile';
import PageContainer from '@/components/layout/page-container';

const breadcrumbItems = [
  { title: 'Panel', link: '/dashboard' },
  { title: 'Perfil', link: '/dashboard/profile' }
];

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <CreateProfileOne categories={[]} initialData={null} />
      </div>
    </PageContainer>
  );
}
