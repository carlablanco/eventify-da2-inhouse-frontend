// auth/index.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { User } from 'next-auth'; // Asegúrate de importar la interfaz User si la necesitas

export const handlers = NextAuth({
  secret: process.env.NEXTAUTH_SECRET, // Asegúrate de definir esto
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'your-email@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const user = {
          id: '1',
          name: 'User',
          email: credentials.email as string
        };
        if (user) {
          return user as User;
        } else {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin'
  }
});
