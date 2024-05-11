import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../util/firebase.config";

export const Context = createContext(null);
export default function ContextProvide({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        console.log("Sign Out");

        setLoading(false);
      }
    });
    return unsubscribe;
  }, [refresh]);

  return (
    <Context.Provider value={{ user, loading, setRefresh, setUser }}>
      {children}
    </Context.Provider>
  );
}

ContextProvide.propTypes = {
  children: PropTypes.node.isRequired,
};
