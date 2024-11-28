'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import { BarGraph } from '@/components/charts/bar-graph';
import { Separator } from '@/components/ui/separator';
import CustomizedUserTable from '@/components/tables/customized-user-table';
import { logsColumns } from '@/components/tables/logs-tables/log-columns';
import { useUserContext } from '@/contexts/UserContext';
import Link from 'next/link';
import CalendarEvents from '@/components/events/calendar-events';
import { getUserLoginLogs } from '@/api/api';

interface Article {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const articles: Record<string, any> = [
  {
    id: 1,
    title: 'Nuevo Proyecto en Desarrollo',
    description:
      'Conoce los detalles del nuevo proyecto que el equipo de desarrollo está llevando a cabo.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661290256778-3b821d52c514?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Actualización en las Políticas',
    description:
      'Revisa los cambios recientes en las políticas internas y cómo te afectan.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1721955487786-76802cbf0812?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: 'Evento Anual de la Compañía',
    description:
      'Recapitulación del evento anual y los logros más destacados del año.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    title: 'Nuevos Horarios de Trabajo',
    description:
      'Conoce los nuevos horarios de trabajo y cómo se aplicarán a partir del próximo mes.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1664193968902-aa114bb373b2?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export function GeneralDashboard() {
  const { isAdmin } = useUserContext();
  const [logsData, setLogsData] = useState([]);
  const [hoverStates, setHoverStates] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false
  });

  const handleMouseEnter = (id: number) => {
    setHoverStates((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setHoverStates((prev) => ({ ...prev, [id]: false }));
  };

  useEffect(() => {
    if (isAdmin) {
      getUserLoginLogs().then((data) => {
        setLogsData(data);
      });
    }
  }, [isAdmin]);

  const getTotalConnections = () => logsData.length;

  const getSuccessRate = () => {
    const total = logsData.length;
    const successful = logsData.filter((log: any) => !log.isSuspicious).length;
    return total ? ((successful / total) * 100).toFixed(2) : '0';
  };

  const getFailureRate = () => {
    const total = logsData.length;
    const failed = logsData.filter((log: any) => log.isSuspicious).length;
    return total ? ((failed / total) * 100).toFixed(2) : '0';
  };

  return (
    <>
      <div className="space-y-2">
        <Tabs
          defaultValue={!!isAdmin ? 'analytics' : 'overview'}
          className="space-y-4"
        >
          <TabsList>
            <TabsTrigger value="analytics" disabled={!isAdmin}>
              Analíticas
            </TabsTrigger>
            <TabsTrigger value="overview">General</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <Carousel>
              <CarouselContent>
                {articles.map((article: Article) => {
                  return (
                    <CarouselItem
                      key={article.id}
                      className="md:basis-1/2 lg:basis-1/3"
                      onMouseEnter={() => handleMouseEnter(article.id)}
                      onMouseLeave={() => handleMouseLeave(article.id)}
                    >
                      <Link href={`/articles/${article.id}`} passHref>
                        <Card className="mx-auto w-full max-w-sm transform overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg">
                          <CardContent className="relative p-0">
                            <Image
                              src={article.imageUrl}
                              alt={article.title}
                              width={400}
                              height={120}
                              className="h-[120px] w-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                              <h2 className="mb-1 line-clamp-1 text-lg font-bold">
                                {article.title}
                              </h2>
                              <p
                                className={`text-sm transition-all duration-300 ease-in-out ${
                                  hoverStates[article.id]
                                    ? 'max-h-14 opacity-100'
                                    : 'max-h-0 opacity-0'
                                } line-clamp-2 overflow-hidden`}
                              >
                                {article.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
            <CalendarEvents events={[]} />
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <div className="col-span-4">
              <BarGraph logsData={logsData} />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Cantidad de conexiones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {getTotalConnections()}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Conexiones exitosas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{getSuccessRate()}%</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Conexiones sospechosas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{getFailureRate()}%</div>
                </CardContent>
              </Card>
            </div>
            <Separator />
            <div className="space-y-2">
              <CustomizedUserTable
                columns={logsColumns}
                data={logsData}
                searchKey={'username'}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
