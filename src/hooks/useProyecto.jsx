//Acedemos a la informacion del context
import { useContext  } from "react";
import ProyectoContext from "../context/ProyectoProvider";


const useProyecto = ()=>{
        //Extrae los valores del context para utilizarlos
        return  useContext(ProyectoContext)
}

export default useProyecto;