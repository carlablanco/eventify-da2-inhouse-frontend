import React from 'react';
import { DataTable } from '@/components/ui/data-table';
import { useUserContext } from '@/contexts/UserContext';

export default function CustomizedUserTable({ columns, data, searchKey }: any) {
  const { user } = useUserContext();

  const filteredData = data?.filter((item: any) => {
    const userModules = user.modules?.map((module: any) =>
      module.module.toLowerCase()
    );

    const splitted = userModules?.flatMap((module: any) => module.split(' '));

    return (item.modules as any[]).some((log: any) =>
      splitted.includes(log.module?.toLowerCase())
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
