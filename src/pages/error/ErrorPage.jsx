import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
         <div className="text-center ">
         <h1 className="text-3xl text-red-400 font-bold">404</h1>
         <Link to="/" className="btn btn-ghost my-6">Go Home</Link>
         </div>
        </div>
    );
};

export default ErrorPage;