//Acedemos a la informacion del context
import { useContext  } from "react";
import TramiteContext from "../context/TramiteProvider";

const useTramite = ()=>{
        //Extrae los valores del context para utilizarlos
        return  useContext(TramiteContext)
}

export default useTramite;