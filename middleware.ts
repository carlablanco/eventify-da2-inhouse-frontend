// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'cookie'; // Para analizar cookies

export default function middleware(req: NextRequest) {
  const cookies = parse(req.headers.get('cookie') || '');
  const token = cookies.token; // Asumiendo que guardas el token en una cookie

  // Verifica si el token existe
  if (!token) {
    const url = req.nextUrl.origin; // Redirige a la página de inicio
    return NextResponse.redirect(url);
  }
}

// Define las rutas que quieres proteger
export const config = { matcher: ['/dashboard/:path*'] };
