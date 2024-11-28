'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle, LoaderIcon, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { getModulesHealthStatus } from '@/api/api';
import { cn } from '@/lib/utils';

const breadcrumbItems = [
  { title: 'Panel de Administrador', link: '/dashboard/admin' }
];

const HealthBar = ({ history }: any) => {
  return (
    <div className="flex h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
      {history.map((isHealthy: boolean, index: number) => (
        <div
          key={index}
          className={`flex-1 ${
            isHealthy
              ? 'bg-green-500 dark:bg-green-600'
              : 'bg-red-800 dark:bg-red-800'
          }`}
        />
      ))}
    </div>
  );
};

export default function Dashboard() {
  const [healthStatus, setHealthStatus] = useState<
    {
      name: string;
      isHealthy: boolean;
      healthHistory: boolean[];
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  const updateHealthStatus = () => {
    setIsLoading(true);
    getModulesHealthStatus().then((data) => {
      setHealthStatus(data);
    });
    setIsLoading(false);
  };

  useEffect(() => {
    updateHealthStatus();
  }, []);

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="mb-8 flex flex-wrap items-center justify-between">
          <Heading title={'Estado de servicios'} description={''} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {!isLoading ? (
            healthStatus?.map((module) => (
              <Card
                key={module.name}
                className={
                  !module.isHealthy
                    ? 'border-red-400 bg-red-400  dark:border-red-900 dark:bg-red-900'
                    : ''
                }
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {module.name}
                  </CardTitle>
                  {module.isHealthy ? (
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                  )}
                </CardHeader>
                <CardContent>
                  <div className="mb-2 text-2xl font-bold">
                    {module.isHealthy ? 'Activo' : 'Caído'}
                  </div>
                  <div className="mb-1 text-xs">Histórico</div>
                  <HealthBar history={module.healthHistory} />
                </CardContent>
              </Card>
            ))
          ) : (
            <LoaderIcon className={cn('animate-spin')} />
          )}
        </div>
      </div>
    </PageContainer>
  );
}
