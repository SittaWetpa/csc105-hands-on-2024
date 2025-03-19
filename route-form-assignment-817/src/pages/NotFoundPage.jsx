import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-4xl font-bold text-red-600">404 - Page Not Found</h2>
      <p className="text-gray-700 mt-2">Oopsie! The page you are looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Go back to the Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
