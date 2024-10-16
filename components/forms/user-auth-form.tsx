// UserAuthForm.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/contexts/UserContext';

function UserAuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const { setUser, setToken } = useUserContext();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem('user', JSON.stringify(data.user));
        sessionStorage.setItem('token', data.token);
        setUser(data.user);
        setToken(data.token);
        setCheck(true);
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {}, [check]);
  if (check) {
    router.push('/dashboard');
    return (
      <div className="flex h-full items-center p-4 lg:p-8">
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="divLogin">
        <label>Correo:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="inputLogin"
        />
      </div>
      <div className="divLogin">
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="inputLogin"
        />
      </div>
      {error && <p className="colorRed">{error}</p>}
      <button
        id="buttonLogin"
        type="submit"
        className="buttonLogin"
        disabled={loading}
      >
        {loading ? 'Cargando...' : 'Ingresar'}
      </button>
    </form>
  );
}

export default UserAuthForm;
