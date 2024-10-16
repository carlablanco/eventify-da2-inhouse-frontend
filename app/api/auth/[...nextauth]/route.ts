// app/api/auth/[...nextauth]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const isAuthenticated = email === 'a@b.c' && password === '123';
  if (isAuthenticated) {
    const user = {
      name: 'Pablo Cappetta',
      email: 'pablo.cappetta1@gmail.com',
      aptitudes: [],
      tecnologias: [],
      linkLinkedIn: 'https://www.linkedin.com/in/pablocappetta/',
      linkGitHub: 'https://www.github.com/pablocappetta',
      linkSpotify: 'https://open.spotify.com/user/11135066385',
      linkTwitter: 'https://www.twitter.com/pablocappetta',
      linkMedium: 'https://www.medium.com/@pablocappetta',
      avatar: 'https://i.imgur.com/J4gwCjb.png',
      fotoDePerfil:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F56511932-70ff-4641-abaa-528797706874%2FC79CAD16-E8DE-4852-8BA0-761AB3D4A325.png?table=block&id=338a4526-b0b9-49db-a607-e1e980a78106&spaceId=ae726ef3-1e9d-43ff-ab34-518cf2643f0a&width=250&userId=856651a0-e178-4f57-9ac7-410362c62c30&cache=v2'
    };
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
    const res = NextResponse.json({ success: true, user, token }); // Incluye el token en la respuesta
    return res;
  } else {
    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    );
  }
}
