'use client';

import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { User } from '@/constants/data';
import { userColumns } from './user-columns';
import { FC } from 'react';

interface ProductsClientProps {
  data: User[];
}

export const UserClient: FC<ProductsClientProps> = ({ data }) => {
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Usuarios (${data.length})`}
          description="Listado de usuarios registrados en la plataforma."
        />
      </div>
      <Separator />
      <DataTable searchKey="givenName" columns={userColumns} data={data} />
    </>
  );
};
