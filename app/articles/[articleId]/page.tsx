import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import ArticleViewer from '@/app/articles/articles-main';

const breadcrumbItems = [
  { title: 'Panel', link: '/dashboard' },
  { title: 'Artículo', link: '' }
];

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <ArticleViewer />
      </div>
    </PageContainer>
  );
}
