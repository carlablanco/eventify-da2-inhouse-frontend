import { useRouter } from 'next/navigation';
import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

interface UserContextType {
  user: Record<string, any>;
  setUser: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  isAdmin: boolean;
}

const UserContext = createContext<UserContextType>({
  user: {},
  setUser: () => {},
  isLogged: false,
  setIsLogged: () => {},
  token: '',
  setToken: () => '',
  isAdmin: false
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<Record<string, any>>({});
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState('');
  const router = useRouter();
  const isAdmin = user?.modules?.some((module: { roles: string | string[] }) =>
    module.roles.includes('consultor')
  );

  useEffect(() => {
    const currentPath =
      typeof window !== 'undefined' ? window.location.pathname : '';
    fetch(`https://back.intranet.deliver.ar:3001/api/v1/login/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then((response) => {
        const isValid = response.status === 200;
        setIsLogged(isValid);
        if (isValid) {
          console.log('Token válido, usuario autenticado');
        } else {
          console.log('Token inválido o expirado');
          Cookies.remove('token');
          sessionStorage.clear();
          if (currentPath !== '/') {
            router.push('/');
          }
        }
      })
      .catch((error) => {
        console.log('Error al validar el token:', error);
        setIsLogged(false);
        Cookies.remove('token');
        sessionStorage.clear();
        if (currentPath !== '/') {
          router.push('/');
        }
      });
  }, [router]);

  useEffect(() => {
    const userStorage = sessionStorage.getItem('user');
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    }
  }, []);
  useEffect(() => {
    if (token) {
      const isValidToken = token.length > 10;
      setIsLogged(isValidToken);
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{ user, setUser, isLogged, setIsLogged, token, setToken, isAdmin }}
    >
      {children}
    </UserContext.Provider>
  );
};
