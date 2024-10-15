'use client';

import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useDispatch, useSelector } from 'react-redux';
import { signOut as reduxSignOut } from '@/store/authSlice';
import { useRouter } from 'next/navigation';

export function UserNav() {
  const dispatch = useDispatch();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // Estado para manejar la carga de autenticación
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const router = useRouter();
  const user = useSelector((state: any) => state.auth.user); // Obtener los datos del usuario desde Redux

  useEffect(() => {
    if (isAuthenticated) {
      setIsCheckingAuth(false); // Autenticación confirmada
    } else {
      setIsCheckingAuth(false); // No autenticado o autenticación fallida
    }
  }, [isAuthenticated, router]);

  const handleSignOut = () => {
    dispatch(reduxSignOut());
    router.push('/');
  };

  if (isCheckingAuth) {
    return null; // O puedes mostrar un skeleton o spinner mientras verificas
  }

  if (isAuthenticated && user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.image ?? ''} alt={user.name ?? ''} />
              <AvatarFallback>{user.name?.[0]}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Suscripción</DropdownMenuItem>
            <DropdownMenuItem>Configuración</DropdownMenuItem>
            <DropdownMenuItem>Nuevo Equipo</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>
            Cerrar sesión
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return null; // No mostrar el menú si no hay usuario logueado
}
