'use client';

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
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/contexts/UserContext';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

interface User {
  [key: string]: any; // Esto es para cualquier otra propiedad que pueda existir en el objeto user
}
export function UserNav() {
  const { setUser, setIsLogged } = useUserContext();
  const router = useRouter();

  const [user, setUserFromStorage] = useState<User | null>(null); // Aquí indicamos que `user` puede ser de tipo `User` o `null`

  useEffect(() => {
    const userString = sessionStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    setUserFromStorage(user);
  }, []);

  const handleSignOut = async () => {
    Cookies.remove('token');
    sessionStorage.clear();
    setUser({});
    setIsLogged(false);
    await fetch('https://back.intranet.deliver.ar:3001/api/v1/login/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
    router.push('/');
  };

  if (!user) return null; // Puedes retornar un spinner o algo mientras esperas que el usuario se cargue.

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={
                user.image ??
                'https://static1.personality-database.com/profile_images/8f161dbce46041b98dd70044bb46ea51.png'
              }
              alt={user.lastName ?? ''}
            />
            <AvatarFallback>{user.lastName?.[0]}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.firstName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.lastName}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push('/profile')}>
            Perfil
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleSignOut()}>
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
