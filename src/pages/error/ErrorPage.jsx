import { Link } from "react-router-dom";
import { Home, Rocket } from 'lucide-react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0f0f2d] to-[#1a1a3a] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="relative">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-600 animate-pulse">
              Oops!
            </h1>
            <Rocket className="absolute -right-16 -top-8 text-white h-16 w-16 transform rotate-45 animate-bounce" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mt-8 mb-4">
            404 - Page Not Found
          </h2>
          
          <p className="text-gray-300 text-lg max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, 
            had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="relative inline-block group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Link
              className="relative flex items-center px-6 py-3 bg-black rounded-lg leading-none divide-x divide-gray-600"
              to= '/'
            >
              <span className="flex items-center space-x-2">
                <Home className="h-5 w-5 text-orange-400" />
                <span className="text-gray-100 transition duration-200 group-hover:text-orange-400">
                  Return Home
                </span>
              </span>
            </Link>
          </div>
          
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute h-2 w-2 bg-white rounded-full animate-ping" style={{ top: '20%', left: '10%' }}></div>
            <div className="absolute h-2 w-2 bg-white rounded-full animate-ping" style={{ top: '60%', left: '80%' }}></div>
            <div className="absolute h-2 w-2 bg-white rounded-full animate-ping" style={{ top: '80%', left: '30%' }}></div>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;