'use client';

import * as z from 'zod';
import React, { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Trash } from 'lucide-react';
import { useParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { Heading } from '@/components/ui/heading';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useToast } from '../ui/use-toast';
import { getUser } from '@/api/api';

const categories = [
  { _id: 'ceo', name: 'CEO' },
  {
    _id: 'developer',
    name: 'Developer'
  },
  { _id: 'designer', name: 'Designer' },
  { _id: 'manager', name: 'Manager' },
  { _id: 'marketing', name: 'Marketing' },
  { _id: 'sales', name: 'Sales' },
  { _id: 'support', name: 'Support' },
  { _id: 'other', name: 'Other' }
];

const formSchema = z.object({
  name: z.string({ message: 'Name is required' }),
  module: z.string({ message: 'Module is required' }),
  role: z.string({ message: 'Role is required' }),
  verified: z.string({ message: 'Verified is required' }),
  status: z.string({ message: 'Status is required' })
});

const defaultValues = {
  name: '',
  module: '',
  role: '',
  verified: '',
  status: ''
};

type UserFormValues = z.infer<typeof formSchema>;

export const UserForm: React.FC = () => {
  const [initialData, setInitialData] = useState<UserFormValues | null>(null);
  const params = useParams();
  const { toast } = useToast();
  const isEdit = !!params.uid;
  const [loading, setLoading] = useState(false);
  const title = initialData ? 'Editar usuario' : 'Agregar usuario';
  const description = initialData
    ? 'Edita la información de un usuario registrado'
    : 'Agrega un nuevo usuario a la lista';
  const toastMessage = initialData ? 'Usuario actualizado' : 'Usuario creado';
  const action = initialData ? 'Guardar cambios' : 'Agregar usuario';
  const { setValue } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  useEffect(() => {
    if (isEdit) {
      getUser(params.uid as string).then((res) => {
        setInitialData(res as any);
      });
    }
  }, [isEdit, params.uid, setValue]);

  const form = useForm<UserFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    values: initialData ?? defaultValues
  });

  const onSubmit = async (data: UserFormValues) => {
    try {
      setLoading(true);
      toast({
        variant: 'default',
        title: 'Procesando...',
        description: 'Estamos procesando tu solicitud.'
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Algo salió mal.',
        description: 'Hubo un problema con tu solicitud.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button disabled={loading} variant="destructive" size="sm">
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <div className="gap-8 md:grid md:grid-cols-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Nombre del empleado"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="module"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Departamento</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Nombre del departamento"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Rol</FormLabel>
                    <Select
                      disabled={loading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            defaultValue={field.value}
                            placeholder="Selecciona un rol"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category._id} value={category.name}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="verified"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verificado</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Selecciona un estado"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {['Si', 'No'].map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Selecciona un estado"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {['Activo', 'Inactivo'].map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
