import { useRouter } from 'next/navigation';
import React, { createContext, useState, useContext, useEffect } from 'react';

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
  const isAdmin =
    user.modules?.eda?.includes('admin') ||
    user.modules?.marketing?.includes('admin') ||
    user.modules?.hr?.includes('admin') ||
    user.modules?.artistas.includes('admin');

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    const storedUser = sessionStorage.getItem('user');
    const currentPath =
      typeof window !== 'undefined' ? window.location.pathname : '';

    setToken(storedToken ?? '');

    if (!storedToken && currentPath !== '/') {
      router.push('/');
    } else if (storedToken) {
      fetch(
        `http://backclusterinhouseloadbalancer-1956526135.us-east-1.elb.amazonaws.com:3001/api/v1/login/token`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ jwt: storedToken })
        }
      )
        .then((response) => {
          const isValid = response.status === 200;
          console.log('Token');
          setIsLogged(isValid);
          if (isValid) {
            console.log('Token válido, usuario autenticado');
          } else {
            console.log('Token inválido o expirado');
            if (currentPath !== '/') {
              router.push('/');
            }
          }
        })
        .catch((error) => {
          console.log('Error al validar el token:', error);
          setIsLogged(false);
          if (currentPath !== '/') {
            router.push('/');
          }
        });
    }
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

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
