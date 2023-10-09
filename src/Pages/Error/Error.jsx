import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center border">
      <div className="p-8 rounded-lg text-center">
        <h1 className="text-xl md:text-4xl text-red-500 font-semibold">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mt-4">
          Sorry, the page you're looking for does not exist.
        </p>

        <Link to="/">
          <button className="btn-fourth mt-4">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
