import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import ArticleViewer from '@/app/articles/articles-main';

const breadcrumbItems = [
  { title: 'Panel', link: '/dashboard' },
  { title: 'Artículo', link: '' }
];

export async function generateStaticParams() {
  // Recupera los datos reales desde tu API o base de datos
  const articles = [{ id: '1' }, { id: '2' }, { id: '3' }];

  return articles.map((article) => ({
    articleId: article.id
  }));
}

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
