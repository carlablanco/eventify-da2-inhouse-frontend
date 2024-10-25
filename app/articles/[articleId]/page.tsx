import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
<<<<<<<< HEAD:app/articles/[articleId]/page.tsx
import ArticleViewer from '@/app/articles/articles-main';

const breadcrumbItems = [
  { title: 'Panel', link: '/dashboard' },
  { title: 'Artículo', link: '' }
];
========
import ProfilePage from '@/components/profile/profile-page';

const breadcrumbItems = [{ title: 'Perfil', link: '/profile' }];
>>>>>>>> 7665dab (Entrega 1 (#19)):app/profile/page.tsx

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
<<<<<<<< HEAD:app/articles/[articleId]/page.tsx
        <ArticleViewer />
========
        <ProfilePage />
>>>>>>>> 7665dab (Entrega 1 (#19)):app/profile/page.tsx
      </div>
    </PageContainer>
  );
}
