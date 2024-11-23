import React from 'react';
import { DataTable } from '@/components/ui/data-table';
import { useUserContext } from '@/contexts/UserContext';

export default function CustomizedUserTable({ columns, data, searchKey }: any) {
  const { user } = useUserContext();

  const filteredData = data.filter((item: any) => {
    // Obtener los módulos del item en formato de clave
    const itemModules = Object.keys(item.modules ?? {}) ?? [];
    // Obtener los módulos del usuario como un array de nombres
    const userModules =
      user.modules?.map((module: any) => module.module.toLowerCase()) ?? [];

    // Comprobar si algún módulo del item está incluido en los módulos del usuario
    return itemModules.some((module) =>
      userModules.includes(module.toLowerCase())
    );
  });
  return (
    <DataTable
      searchKey={searchKey}
      columns={columns}
      data={filteredData as any}
    />
  );
}
