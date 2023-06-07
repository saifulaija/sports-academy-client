import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Loader from "../components/Loader/Loader";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {


      const {user, loading} = useContext(AuthContext)
      const location = useLocation()



      if(loading){
            return <Loader></Loader>
      }
      if(user){
            return children
      }

      return  <Navigate to='/login' state={{from: location}} replace></Navigate> 
    
};

export default PrivateRoute;