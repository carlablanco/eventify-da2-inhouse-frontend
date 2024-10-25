'use client';

import { ColumnDef } from '@tanstack/react-table';
import { User } from '@/constants/data';
import moment from 'moment';
import { AlertCircleIcon } from 'lucide-react';

export const logsColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'event',
    header: 'TYPE',
    cell: (item: any) => {
      if (item.row.getValue('isSuspicious')) {
        return (
          <div className="flex justify-center space-x-2">
            <AlertCircleIcon className="text-red-500" />
            <span>{item.row.getValue() as string}</span>
          </div>
        );
      }
    }
  },
  {
    accessorKey: '_id',
    header: 'ID'
  },
  {
    accessorKey: 'username',
    header: 'USERNAME'
  },
  {
    accessorKey: 'action',
    header: 'ACCION'
  },
  {
    accessorKey: 'isSuspicious',
    header: 'ACTIVIDAD SOSPECHOSA',
    cell: (item) => (item.getValue() ? 'SI' : 'NO')
  },
  {
    accessorKey: 'timestamp',
    header: 'HORARIO',
    cell: (item) =>
      moment(item.getValue() as string).format('DD/MM/YYYY HH:mm:ss')
  },
  {
    accessorKey: 'modules',
    header: 'MODULOS',
    cell: (item) => {
      const modules = item.getValue() as any;
      return Object.keys(modules)
        .map((module) => module.toUpperCase())
        .join(', ');
    }
  }
];
