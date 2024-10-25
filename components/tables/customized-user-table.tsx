import React from 'react';
import { DataTable } from '@/components/ui/data-table';
import { useUserContext } from '@/contexts/UserContext';

export default function CustomizedUserTable({ columns, data, searchKey }: any) {
  const { user } = useUserContext();
  const filteredData = data.filter((item: any) => {
    const itemModule = Object.keys(item.modules ?? {}) ?? [];
    const userModule = Object.keys(user.modules ?? {}) ?? [];

    return itemModule.some((module) =>
      userModule.includes(module.toLowerCase())
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
