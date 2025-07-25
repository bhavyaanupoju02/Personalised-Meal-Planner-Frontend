import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to your Personalised Diet Plan
        </h1>
        <p className="text-lg text-center">
          Get your Personalised Diet Plan!
        </p>
        <div className="flex justify-center mt-4">
          <Link
            to="/login"
            className="bg-blue-600 text-white py-2 px-4 rounded mr-4"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-600 text-white py-2 px-4 rounded"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
