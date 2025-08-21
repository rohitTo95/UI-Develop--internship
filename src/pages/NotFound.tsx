import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-12 text-center">
      <div className="mb-8">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
      </div>
      
      <div className="space-y-4">
        <Link 
          to="/" 
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-violet-900 transition-colors"
        >
          Go Home
        </Link>
        
        <div className="text-sm text-gray-500">
          <Link 
            to="/login" 
            className="text-primary hover:text-violet-900 mr-4"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="text-primary hover:text-violet-900"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
