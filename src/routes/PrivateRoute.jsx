import { useContext } from "react";
import { Context } from "../context/ContextProvide";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
export default function PrivateRoute({ children }) {
  const location = useLocation();
  console.log(location);
  const { user } = useContext(Context);

  if (!user) {
    return <Navigate to={"/signin"} state={location.pathname}></Navigate>;
  }

  return <div>{children}</div>;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
