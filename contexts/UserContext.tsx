import { useRouter } from 'next/navigation';
import React, { createContext, useState, useContext, useEffect } from 'react';

interface UserContextType {
  user: Record<string, any>; // 'user' puede ser cualquier objeto
  setUser: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextType>({
  user: {},
  setUser: () => {},
  isLogged: false,
  setIsLogged: () => {},
  token: '',
  setToken: () => ''
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<Record<string, any>>({});
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState('');
  const router = useRouter();
  // Obtener token de sessionStorage cuando el componente se monta
  /*useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    const storedUser = sessionStorage.getItem('user') ?? '';
    setToken(storedToken ?? '');
    if (!storedToken) {
      console.log('No hay token en sessionStorage');
    }
    if (!storedUser) {
      console.log('No hay token en sessionStorage');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []); // Solo ejecuta cuando el componente se monta
*/
  useEffect(() => {
    if (token) {
      const isValidToken = token.length > 10; // Ejemplo simple: token de longitud mayor a 10 es válido
      setIsLogged(isValidToken);
    }
  }, [token]);

  // Verificar el token con la API cuando 'token' cambia
  useEffect(() => {
    if (token) {
      fetch(`http://localhost:8000/api/usuarios/jwt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ jwt: token })
      })
        .then((response) => {
          const isValid = response.status === 200;
          setIsLogged(isValid);
          if (isValid) {
            console.log('Token válido, usuario autenticado');
          } else {
            console.log('Token inválido o expirado');
          }
        })
        .catch((error) => {
          //console.log('Error al validar el token:', error);
          //setIsLogged(false);
        });
    }
  }, [token]); // Solo ejecuta cuando 'token' cambia

  return (
    <UserContext.Provider
      value={{ user, setUser, isLogged, setIsLogged, token, setToken }}
    >
      {children}
    </UserContext.Provider>
  );
};
