'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoaderIcon, VerifiedIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import Image from 'next/image';
import React from 'react';

const formSchema = z.object({
  uid: z.string(),
  name: z.string({ message: 'Nombre requerido' }),
  email: z.string().email({ message: 'Ingresá un correo electrónico válido' }),
  role: z.string(),
  module: z.string(),
  status: z.string(),
  validated: z.boolean()
});

type UserProfileFormValue = z.infer<typeof formSchema>;

function UserProfile() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null); // Estado para almacenar el usuario
  const { toast } = useToast();

  // Cargar el usuario desde sessionStorage al montar el componente
  useEffect(() => {
    const userString = sessionStorage.getItem('user');
    if (userString) {
      const parsedUser = JSON.parse(userString);
      setUser(parsedUser);
    }
  }, []);

  const form = useForm<UserProfileFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      uid: '',
      role: '',
      module: '',
      status: '',
      validated: false
    }
  });

  useEffect(() => {
    if (user) {
      const modules = user.modules.map((mod: any) => mod.module).join(', ');
      const roles = user.modules
        .map((mod: any) => `${mod.module}: ${mod.roles.join(', ')}`)
        .join(', ');

      form.reset({
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        uid: user.id,
        role: roles,
        module: modules,
        status: 'Activo',
        validated: true
      });
    }
  }, [user, form]);

  const onSubmit = async (formValues: UserProfileFormValue) => {
    setLoading(true);
    toast({
      title: 'Actualización',
      description: 'Función de actualización pendiente'
    });
    setLoading(false);
  };

  return (
    <div className={'flex flex-col'}>
      <div className="flex items-center">
        <Image
          src={
            (user?.avatar as string) ??
            'https://static1.personality-database.com/profile_images/8f161dbce46041b98dd70044bb46ea51.png'
          }
          alt="Avatar"
          width={10}
          height={10}
          className="mr-4 h-20 w-20 rounded-full"
        />
        <div className={'flex flex-col'}>
          <div className={'flex gap-2'}>
            <h2 className="text-xl font-semibold">
              {user?.firstName + ' ' + user?.lastName}
            </h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <VerifiedIcon className={'h-4 w-4 text-success'} />
                </TooltipTrigger>
                <TooltipContent align="center" side="right" sideOffset={8}>
                  Usuario verificado
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-sm">{form.getValues('role').toUpperCase()}</p>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid w-full grid-cols-2 items-end gap-4 space-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input readOnly {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" readOnly {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {user?.modules.map((mod: any, index: string) => (
            <React.Fragment key={index}>
              <FormField
                control={form.control}
                name="module"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Módulo {index + 1}</FormLabel>
                    <FormControl>
                      <Input readOnly {...field} value={mod.module} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Roles del Módulo {index + 1}</FormLabel>
                    <FormControl>
                      <Input
                        readOnly
                        {...field}
                        value={mod.roles.join(', ')} // Combina roles en una sola cadena
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </React.Fragment>
          ))}

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className={'col-span-2'}>
                <FormLabel>Estado</FormLabel>
                <FormControl>
                  <Input readOnly {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Button disabled={true} className="mt-8 w-full" type="submit">
        {loading ? (
          <LoaderIcon className={cn('animate-spin')} />
        ) : (
          'Guardar cambios'
        )}
      </Button>
    </div>
  );
}

export default UserProfile;
