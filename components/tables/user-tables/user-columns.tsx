'use client';

import { ColumnDef } from '@tanstack/react-table';
import { User } from '@/constants/data';
import { Checkbox } from '@/components/ui/checkbox';

export const userColumns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Seleccionar todos"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Seleccionar fila"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'uid',
    header: 'ID'
  },
  {
    accessorKey: 'givenName',
    header: 'NOMBRE'
  },
  {
    accessorKey: 'sn',
    header: 'APELLIDO'
  },
  {
    accessorKey: 'mail',
    header: 'EMAIL'
  },
  {
    accessorKey: 'telephoneNumber',
    header: 'TELEFONO'
  },
  {
    accessorKey: 'street',
    header: 'DIRECCION'
  },
  {
    accessorKey: 'l',
    header: 'CIUDAD'
  },
  {
    accessorKey: 'st',
    header: 'PROVINCIA'
  },
  {
    accessorKey: 'modules',
    header: 'MODULO',
    cell: (item) =>
      Object.keys(item.getValue() as any)
        .join(', ')
        .toUpperCase()
  },
  // {
  //   accessorKey: 'modules.eda',
  //   header: 'ROL (EDA)',
  //   cell: (item) => {
  //     const value = item.getValue() ?? 'N/A';
  //     return Array.isArray(value)
  //       ? value.join(', ').toUpperCase()
  //       : (value as string).toUpperCase();
  //   }
  // },
  // {
  //   accessorKey: 'modules.hr',
  //   header: 'ROL (HR)',
  //   cell: (item) => {
  //     const value = item.getValue() ?? 'N/A';
  //     return Array.isArray(value)
  //       ? value.join(', ').toUpperCase()
  //       : (value as string).toUpperCase();
  //   }
  // },
  // {
  //   accessorKey: 'modules.marketing',
  //   header: 'ROL (Marketing)',
  //   cell: (item) => {
  //     const value = item.getValue() ?? 'N/A';
  //     return Array.isArray(value)
  //       ? value.join(', ').toUpperCase()
  //       : (value as string).toUpperCase();
  //   }
  // },
  // {
  //   accessorKey: 'modules.artists',
  //   header: 'ROL (Artists)',
  //   cell: (item) => {
  //     const value = item.getValue() ?? 'N/A';
  //     return Array.isArray(value)
  //       ? value.join(', ').toUpperCase()
  //       : (value as string).toUpperCase();
  //   }
  // },
  {
    accessorKey: 'isActive',
    header: 'ESTADO',
    cell: (item) => {
      const value = item.getValue() as boolean;
      return value ? 'ACTIVO' : 'INACTIVO';
    }
  }
];
