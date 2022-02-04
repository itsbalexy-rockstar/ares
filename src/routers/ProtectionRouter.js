import { Navigate } from "react-router-dom";

export const PublicRoute = ({isLoggedIn,  children }) => {
    return isLoggedIn ? <Navigate to="/" /> : children;
};


export const PrivateRoute = ({isLoggedIn, children}) => {
    return isLoggedIn ? children : <Navigate to="/auth/login" />;
};