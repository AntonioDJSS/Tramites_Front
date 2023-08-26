//Acedemos a la informacion del context
import { useContext  } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = ()=>{
        //Extrae los valores del context para utilizarlos
        return  useContext(AuthContext)
}

export default useAuth;