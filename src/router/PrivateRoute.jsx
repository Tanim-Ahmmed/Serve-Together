
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/loading/Loading";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

    const {user,loading} =useAuth();
    const location = useLocation();


    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivateRoute;