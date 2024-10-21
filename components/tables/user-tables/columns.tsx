'use client';

import { ColumnDef } from '@tanstack/react-table';
import { User } from '@/constants/data';
import { Checkbox } from '@/components/ui/checkbox';

export const columns: ColumnDef<User>[] = [
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
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'name',
    header: 'NOMBRE'
  },
  {
    accessorKey: 'module',
    header: 'MODULO'
  },
  {
    accessorKey: 'role',
    header: 'ROL'
  },
  {
    accessorKey: 'verified',
    header: 'VERIFICADO',
    cell: (item) => (item.getValue() ? 'Si' : 'No')
  },
  {
    accessorKey: 'status',
    header: 'ESTADO'
  }
];
