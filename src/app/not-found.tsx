import Link from 'next/link';
import { AlertTriangle, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <AlertTriangle className="w-24 h-24 text-primary mx-auto mb-4" />
          <h1 className="text-8xl font-bold text-dark mb-4">404</h1>
          <h2 className="text-3xl font-bold text-dark mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 text-lg">
            We&apos;re sorry, the page you have looked for does not exist in our website! 
            Maybe go to our home page or try to use a search?
          </p>
        </div>
        
        <Link 
          href="/"
          className="inline-flex items-center btn-primary"
        >
          <Home className="w-5 h-5 mr-2" />
          Go Back To Home
        </Link>
      </div>
    </div>
  );
}
