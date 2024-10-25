'use client';

import React from 'react';
import PageContainer from '@/components/layout/page-container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { BarGraph } from '@/components/charts/bar-graph';

import { Separator } from '@/components/ui/separator';
import CustomizedUserTable from '@/components/tables/customized-user-table';
import { logsColumns } from '@/components/tables/logs-tables/log-columns';
import { actualLogsData } from '@/constants/data';
import { useUserContext } from '@/contexts/UserContext';

const articles = [
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

const employee = {
  name: 'Mariana Gómez',
  role: 'Desarrolladora de Software',
  description:
    'Mariana ha liderado exitosamente el último proyecto de implementación de IA, mejorando el rendimiento del equipo y superando las expectativas de los clientes.',
  imageUrl:
    'https://as1.ftcdn.net/v2/jpg/04/98/20/28/1000_F_498202810_sw4JBKYRNIgmYT0asdluVeNGNKFKQOEn.jpg'
};

export function GeneralDashboard() {
  const { isAdmin } = useUserContext();

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">¡Bienvenido! 👋</h2>
        </div>
        <Tabs
          defaultValue={!!isAdmin ? 'analytics' : 'overview'}
          className="space-y-4"
        >
          <TabsList>
            <TabsTrigger value="analytics" disabled={!isAdmin}>
              Analiticas
            </TabsTrigger>
            <TabsTrigger value="overview">General</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div>
              <h1 className={'py-4'}>Últimas noticias</h1>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {articles.map((article) => {
                  return (
                    <Card key={article.title}>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img
                          src={article.imageUrl}
                          className={'h-[180px] w-[180px] py-4'}
                        />
                        <CardDescription>{article.description}</CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
            <div>
              <h1 className={'py-4'}>Empleado del mes</h1>
              <div className="grid grid-cols-1">
                <Card className="grid grid-cols-1">
                  <div
                    className={
                      'flex flex-row content-center items-center justify-center'
                    }
                  >
                    <CardHeader className="flex content-center items-center justify-center">
                      <img
                        src={employee.imageUrl}
                        alt={`Foto de ${employee.name}`}
                        className="h-[100px] rounded-3xl object-cover"
                      />
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center pt-6">
                      <CardTitle className="text-2xl font-semibold">
                        {employee.name}
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-500">
                        {employee.role}
                      </CardDescription>
                      <CardDescription>
                        <p className="mt-2">{employee.description}</p>
                      </CardDescription>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <div className="col-span-4">
              <BarGraph />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Cantidad de conexiones
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% el ultimo mes
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Conexiones por módulo
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+24</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% el ultimo mes
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Conexiones exitosas
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">99%</div>
                  <p className="text-xs text-muted-foreground">
                    ~0.02 fallas el último mes
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Conexiones fallidas
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1%</div>
                  <p className="text-xs text-muted-foreground">
                    ~0.02 fallas el último mes
                  </p>
                </CardContent>
              </Card>
            </div>
            <Separator />
            <div className="space-y-2">
              <CustomizedUserTable
                columns={logsColumns}
                data={actualLogsData}
                searchKey={'username'}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}
