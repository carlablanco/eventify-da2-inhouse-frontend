import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';

const breadcrumbItems = [
  { title: 'Panel', link: '/dashboard' },
  { title: 'Perfil', link: '/profile' }
];

export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <div className={'text-2xl'}>Under construction...</div>
      </div>
    </PageContainer>
  );
}
