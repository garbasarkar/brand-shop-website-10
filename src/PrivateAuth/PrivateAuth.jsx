import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../PrivateRouter/firebase.config";

export const AuthContext = createContext(null);
const PrivateAuth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const userCreateAuth = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUserAuth = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

    useEffect( () => {
        const userFixed = onAuthStateChanged(auth, (currentUser) => {
            console.log('user in the auth state chance!', currentUser);
            setLoading(false)
            setUser(currentUser)
        });
        return () => {
            userFixed();
        }
    }, [])

    const logOut = () => {
        return signOut(auth)
    }

  const authInfo = { user, loading, userCreateAuth, loginUserAuth, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default PrivateAuth;
