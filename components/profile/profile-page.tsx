'use client';

import { useState } from 'react';
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
import { useUserContext } from '@/contexts/UserContext';
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';

const formSchema = z.object({
  id: z.string(),
  name: z.string({ message: 'Nombre requerido' }),
  email: z.string().email({ message: 'Ingresá un correo electrónico válido' }),
  role: z.string(),
  module: z.string(),
  status: z.string(),
  validated: z.boolean()
});

type UserProfileFormValue = z.infer<typeof formSchema>;

const defaultValues = {
  name: 'Juan Pérez',
  email: 'juan.perez@example.com',
  id: '12345',
  role: 'Administrador',
  module: 'Recursos Humanos',
  status: 'Activo',
  validated: true
};

function UserProfile() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useUserContext();
  const form = useForm<UserProfileFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

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
      <div className="my-6 flex items-center">
        <img
          src={
            user?.avatar ??
            'https://static1.personality-database.com/profile_images/8f161dbce46041b98dd70044bb46ea51.png'
          }
          alt="Avatar"
          className="mr-4 h-20 w-20 rounded-full"
        />
        <div className={'flex flex-col'}>
          <div className={'flex gap-2'}>
            <h2 className="text-xl font-semibold">
              {user?.name ?? 'Juan Pérez'}
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
          <p className="text-sm">{user?.role ?? 'CEO'}</p>
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

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rol</FormLabel>
                <FormControl>
                  <Input readOnly {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="module"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Módulo</FormLabel>
                <FormControl>
                  <Input readOnly {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
