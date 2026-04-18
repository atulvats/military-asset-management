import { createContext,useState } from "react";

export const AuthContext = createContext();

function AuthProvider({children}) {
  const [token,setToken] = useState(localStorage.getItem("token"));

  const login = (data)=>{
    localStorage.setItem("token",data);
    setToken(data);
  };

  // const logout = ()=>{
  //   localStorage.removeItem("token");
  //   setToken(null);
  // };

  const logout = () => {
  localStorage.removeItem("token");
  navigate("/", { replace:true });
};

  return (
    <AuthContext.Provider value={{token,login,logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;