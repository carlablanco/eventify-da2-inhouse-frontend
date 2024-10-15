// UserAuthForm.tsx
import { useDispatch } from 'react-redux';
import { signIn } from '@/store/authSlice'; // Ajusta la ruta según tu estructura de carpetas
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function UserAuthForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Estado de carga
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Activar estado de carga
    setError(''); // Limpiar el mensaje de error al tocar "Ingresar"

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
        dispatch(signIn({ user: data.user, token: data.token }));
        document.cookie = `token=${data.token}; path=/;`; // Asegúrate de que el token se establezca como cookie
        router.push('/dashboard');
      } else {
        setError(data.message || 'Invalid credentials'); // Mostrar error
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false); // Desactivar estado de carga
    }
  };

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
