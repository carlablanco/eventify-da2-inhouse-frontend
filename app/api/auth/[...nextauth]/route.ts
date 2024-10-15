// app/api/auth/[...nextauth]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import store from '@/store/store';
import { signIn } from '@/store/authSlice';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const isAuthenticated =
    email === 'test@example.com' && password === 'password';
  if (isAuthenticated) {
    const user = { email };
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
    store.dispatch(signIn({ user: user.email, token }));

    // Puedes establecer la cookie aquí si es necesario (opcional)
    const res = NextResponse.json({ success: true, user, token }); // Incluye el token en la respuesta
    res.cookies.set('token', token, {
      httpOnly: true,
      maxAge: 60 * 60,
      path: '/'
    });

    return res;
  } else {
    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    );
  }
}
