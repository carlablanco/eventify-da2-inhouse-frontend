import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';

const breadcrumbItems = [
  { title: 'Panel', link: '/dashboard' },
  { title: 'Perfil', link: '/profile' }
];

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div>Under construction...</div>
      </div>
    </PageContainer>
  );
}
