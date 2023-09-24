import React from "react";
import { useContext } from "react";
import { createContext } from "react";
const AuthContext = createContext({});
const AuthContextProvider = ({ children }) => {

  const [showModal, setShowModal] = useState("");
    const handleShowModal = (modalType) => {
      setShowModal(modalType || "");
    };

    const handleCloseModal = (e) => {
        e?.stopPropagation();
        setShowModal("");
    }
  return <AuthContextProvider value={{showModal, handleShowModal, handleCloseModal}}>
    {children}
  </AuthContextProvider>;
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
