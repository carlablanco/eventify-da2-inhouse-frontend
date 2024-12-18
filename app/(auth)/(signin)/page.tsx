import { Music2 } from 'lucide-react';
import AuthClient from './AuthClient';

export const metadata = {
  title: 'Login - Eventify',
  description: 'Authentication forms built using the components.'
};

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center gap-2 text-lg font-medium">
          <Music2 />
          Eventify
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">&ldquo;No soy Batman.&rdquo;</p>
            <footer className="text-sm">Bruce Wayne</footer>
          </blockquote>
        </div>
      </div>
      <AuthClient />
    </div>
  );
}
