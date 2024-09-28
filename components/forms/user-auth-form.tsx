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
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        router.push('/dashboard'); // Redirigir solo si el inicio de sesión es exitoso
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError('An unexpected error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default UserAuthForm;
