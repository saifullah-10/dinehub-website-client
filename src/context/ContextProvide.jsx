import { createContext } from "react";
import PropTypes from "prop-types";

export const Context = createContext(null);
export default function ContextProvide({ children }) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}

ContextProvide.propTypes = {
  children: PropTypes.node.isRequired,
};
