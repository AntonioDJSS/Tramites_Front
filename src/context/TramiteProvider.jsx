import { useState } from "react";
import { createContext } from "react";
import axiosClient from "../../config/axiosClient";
// import serverAxios from "../../config/serverAxios";
//Se utiliza en los hooks
const TramiteContext = createContext();

//Children son todos los componentes para que este disponible
//El provider rodea toda la aplicacion en donde vienen los datos
//Toda la informacion que este dentro de return estara disponible en todos los componentes
// eslint-disable-next-line react/prop-types
const TramiteProvider = ({ children }) => {
  // estado que va a guardar el elemento que se va a ver o a editar
  const [selectedItem, setSelectedItem] = useState([]);

  // traer los tramites
  const consultarTramites = async (paginate, limit) => {
    try {
      const respuesta = await axiosClient(
        `/tramiteController?limit=${limit}&page=${paginate}`,
        {
          withCredentials: true,
        }
      );
      return { respuesta };
    } catch (error) {
      console.log(error);
      return { error };
    }
  };

  //buscar tramite
  const buscarTramite = async (paginate, nombre) => {
    try {
      const respuesta = await axiosClient(
        `/tramiteController/buscarT?page=${paginate}&nombre=nombre&valor=${nombre}`,
        {
          withCredentials: true,
        }
      );
      return { respuesta };
    } catch (error) {
      console.log(error);
      return { error };
    }
  };

  //crear tramite
  const crearTramite = async (
    tipo,
    periodo,
    etaSinTransicion,
    etaConTransicion,
    antesExploracion,
    exploracionEvaluacionPotencial,
    exploracionIncorporacionReservas,
    exploracionProgramaEvaluacion,
    revaluacion,
    produccionTemprana,
    antesDesarrollo,
    antesInicioProduccion,
    produccionRegular,
    abandono,
    devolucionArea,
    regulacion,
    regulacionCorto,
    articuloNumeral,
    dependencias,
    detonante,
    aguasProfundas,
    aguasSomeras,
    terrestres,
    presentacion,
    nombre,
    nombreConamer,
    numeroConamer,
    nombreFormato,
    homoClaveFormatoConamer,
    periodicidad,
    plazoPresentar,
    sujetoRespuestaRadios,
    plazoMaximoRespuestaResolucion,
    montosDerechosRadios,
    nombreAprovechamiento,
    monto,
    comentarios,
    revision,
    fechaIngreso,
    fechaMaximaResolucion,
    fechaMinimaResolucion,
    plazoPrevencion,
    plazoRespuestaPrevencion,
    plazoRespuesta,
    plazoMaximoRespuesta,
    resolucion,
    regulacionLink,
    pdfReferencia,
    pdfRequisitos
  ) => {
    try {
      const response = await axiosClient.post(
        "/tramiteController",
        {
          tramites: [
            {
              nombre:
                "Tipo (autorización, Aviso, Aviso, Informe, Solicitud, Informe, Registro)",
              valor: tipo,
            },
            {
              nombre:
                "Periodo O Etapa Del Contrato (eta, Exploración, Desarrollo O Cierre)",
              valor: periodo,
            },
            {
              nombre: "Eta Sin Transición",
              valor: etaSinTransicion,
            },
            {
              nombre: "Eta Con Transición",
              valor: etaConTransicion,
            },
            {
              nombre: "Antes De Exploración",
              valor: antesExploracion,
            },
            {
              nombre: "Exploración (evaluación De Potencial)",
              valor: exploracionEvaluacionPotencial,
            },
            {
              nombre: "Exploración (incorporacion De Reservas)",
              valor: exploracionIncorporacionReservas,
            },
            {
              nombre: "Exploración (programa De  Evaluación)",
              valor: exploracionProgramaEvaluacion,
            },
            {
              nombre: "Revaluación",
              valor: revaluacion,
            },
            {
              nombre: "Producción Temprana",
              valor: produccionTemprana,
            },
            {
              nombre: "Antes De Desarrollo",
              valor: antesDesarrollo,
            },
            {
              nombre: "Antes De Inicio De Producción",
              valor: antesInicioProduccion,
            },
            {
              nombre: "Producción Regular",
              valor: produccionRegular,
            },
            {
              nombre: "Abandono",
              valor: abandono,
            },
            {
              nombre: "Devolución Del Área (etf)",
              valor: devolucionArea,
            },
            {
              nombre: "Regulación",
              valor: regulacion,
            },
            {
              nombre: "Regulación Corto",
              valor: regulacionCorto,
            },
            {
              nombre: "Artículo O  Numeral",
              valor: articuloNumeral,
            },
            {
              nombre: "Dependencia(s)",
              valor: dependencias,
            },
            {
              nombre: "Detonante",
              valor: detonante,
            },
            {
              nombre: "Aguas Profundas",
              valor: aguasProfundas,
            },
            {
              nombre: "Aguas Someras",
              valor: aguasSomeras,
            },
            {
              nombre: "Terrestres",
              valor: terrestres,
            },
            {
              nombre: "Presentación",
              valor: presentacion,
            },
            {
              nombre: "Nombre",
              valor: nombre,
            },
            {
              nombre: "Nombre En Conamer",
              valor: nombreConamer,
            },
            {
              nombre: "Número U Homoclave  De Trámite Conamer",
              valor: numeroConamer,
            },
            {
              nombre: "Nombre Del Formato",
              valor: nombreFormato,
            },
            {
              nombre: "Homoclave Del Formato En Conamer",
              valor: homoClaveFormatoConamer,
            },
            {
              nombre: "Periodicidad",
              valor: periodicidad,
            },
            {
              nombre: "Plazo Para Presentar",
              valor: plazoPresentar,
            },
            {
              nombre: "Sujeto A Respuesta?",
              valor: sujetoRespuestaRadios,
            },
            {
              nombre: "Plazo Máximo Para Respuesta O Resolución",
              valor: plazoMaximoRespuestaResolucion,
            },
            {
              nombre: "Tiene Monto De Derechos O Aprovechamientos?",
              valor: montosDerechosRadios,
            },
            {
              nombre: "Nombre Del Aprovechamiento",
              valor: nombreAprovechamiento,
            },
            {
              nombre: "Monto Mxn 2020",
              valor: monto,
            },
            {
              nombre: "Comentarios",
              valor: comentarios,
            },
            {
              nombre: "Revisión",
              valor: revision,
            },
            {
              nombre: "Fecha De Ingreso",
              valor: fechaIngreso,
            },
            {
              nombre: "Fecha Maxima De Resolución",
              valor: fechaMaximaResolucion,
            },
            {
              nombre: "Fecha Minima De Resolución",
              valor: fechaMinimaResolucion,
            },
            {
              nombre: "Plazo De Prevención",
              valor: plazoPrevencion,
            },
            {
              nombre: "Plazo Para Respuesta A Prevención",
              valor: plazoRespuestaPrevencion,
            },
            {
              nombre: "Plazo De Respuesta",
              valor: plazoRespuesta,
            },
            {
              nombre: "Plazo Máximo De Respuesta",
              valor: plazoMaximoRespuesta,
            },
            {
              nombre: "Nombre De La Resolución",
              valor: resolucion,
            },
            {
              nombre: "Link",
              valor: regulacionLink,
            },
            {
              nombre: "Referencia",
              valor: pdfReferencia,
            },
            {
              nombre: "Requisitos",
              valor: pdfRequisitos,
            },
          ],
        },
        { withCredentials: true }
      );
      console.log(response);
      return { msg: response.data.message, error: false };
    } catch (error) {
      console.log(error);
      return { msg: error.response.data.error, error: true };
    }
  };

  //editar tramite
  const editarTramite = async (
    _id,
    tipo,
    periodo,
    etaSinTransicion,
    etaConTransicion,
    antesExploracion,
    exploracionEvaluacionPotencial,
    exploracionIncorporacionReservas,
    exploracionProgramaEvaluacion,
    revaluacion,
    produccionTemprana,
    antesDesarrollo,
    antesInicioProduccion,
    produccionRegular,
    abandono,
    devolucionArea,
    regulacion,
    regulacionCorto,
    articuloNumeral,
    dependencias,
    detonante,
    aguasProfundas,
    aguasSomeras,
    terrestres,
    presentacion,
    nombre,
    nombreConamer,
    numeroConamer,
    nombreFormato,
    homoClaveFormatoConamer,
    periodicidad,
    plazoPresentar,
    sujetoRespuestaRadios,
    plazoMaximoRespuestaResolucion,
    montosDerechosRadios,
    nombreAprovechamiento,
    monto,
    comentarios,
    revision,
    fechaIngreso,
    fechaMaximaResolucion,
    fechaMinimaResolucion,
    plazoPrevencion,
    plazoRespuestaPrevencion,
    plazoRespuesta,
    plazoMaximoRespuesta,
    resolucion,
    regulacionLink,
    pdfReferencia,
    pdfRequisitos
  ) => {
    try {
      const response = await axiosClient.put(
        `/tramiteController/${_id}`,
        {
          tramites: [
            {
              nombre:
                "Tipo (autorización, Aviso, Aviso, Informe, Solicitud, Informe, Registro)",
              valor: tipo,
            },
            {
              nombre:
                "Periodo O Etapa Del Contrato (eta, Exploración, Desarrollo O Cierre)",
              valor: periodo,
            },
            {
              nombre: "Eta Sin Transición",
              valor: etaSinTransicion,
            },
            {
              nombre: "Eta Con Transición",
              valor: etaConTransicion,
            },
            {
              nombre: "Antes De Exploración",
              valor: antesExploracion,
            },
            {
              nombre: "Exploración (evaluación De Potencial)",
              valor: exploracionEvaluacionPotencial,
            },
            {
              nombre: "Exploración (incorporacion De Reservas)",
              valor: exploracionIncorporacionReservas,
            },
            {
              nombre: "Exploración (programa De  Evaluación)",
              valor: exploracionProgramaEvaluacion,
            },
            {
              nombre: "Revaluación",
              valor: revaluacion,
            },
            {
              nombre: "Producción Temprana",
              valor: produccionTemprana,
            },
            {
              nombre: "Antes De Desarrollo",
              valor: antesDesarrollo,
            },
            {
              nombre: "Antes De Inicio De Producción",
              valor: antesInicioProduccion,
            },
            {
              nombre: "Producción Regular",
              valor: produccionRegular,
            },
            {
              nombre: "Abandono",
              valor: abandono,
            },
            {
              nombre: "Devolución Del Área (etf)",
              valor: devolucionArea,
            },
            {
              nombre: "Regulación",
              valor: regulacion,
            },
            {
              nombre: "Regulación Corto",
              valor: regulacionCorto,
            },
            {
              nombre: "Artículo O  Numeral",
              valor: articuloNumeral,
            },
            {
              nombre: "Dependencia(s)",
              valor: dependencias,
            },
            {
              nombre: "Detonante",
              valor: detonante,
            },
            {
              nombre: "Aguas Profundas",
              valor: aguasProfundas,
            },
            {
              nombre: "Aguas Someras",
              valor: aguasSomeras,
            },
            {
              nombre: "Terrestres",
              valor: terrestres,
            },
            {
              nombre: "Presentación",
              valor: presentacion,
            },
            {
              nombre: "Nombre",
              valor: nombre,
            },
            {
              nombre: "Nombre En Conamer",
              valor: nombreConamer,
            },
            {
              nombre: "Número U Homoclave  De Trámite Conamer",
              valor: numeroConamer,
            },
            {
              nombre: "Nombre Del Formato",
              valor: nombreFormato,
            },
            {
              nombre: "Homoclave Del Formato En Conamer",
              valor: homoClaveFormatoConamer,
            },
            {
              nombre: "Periodicidad",
              valor: periodicidad,
            },
            {
              nombre: "Plazo Para Presentar",
              valor: plazoPresentar,
            },
            {
              nombre: "Sujeto A Respuesta?",
              valor: sujetoRespuestaRadios,
            },
            {
              nombre: "Plazo Máximo Para Respuesta O Resolución",
              valor: plazoMaximoRespuestaResolucion,
            },
            {
              nombre: "Tiene Monto De Derechos O Aprovechamientos?",
              valor: montosDerechosRadios,
            },
            {
              nombre: "Nombre Del Aprovechamiento",
              valor: nombreAprovechamiento,
            },
            {
              nombre: "Monto Mxn 2020",
              valor: monto,
            },
            {
              nombre: "Comentarios",
              valor: comentarios,
            },
            {
              nombre: "Revisión",
              valor: revision,
            },
            {
              nombre: "Fecha De Ingreso",
              valor: fechaIngreso,
            },
            {
              nombre: "Fecha Maxima De Resolución",
              valor: fechaMaximaResolucion,
            },
            {
              nombre: "Fecha Minima De Resolución",
              valor: fechaMinimaResolucion,
            },
            {
              nombre: "Plazo De Prevención",
              valor: plazoPrevencion,
            },
            {
              nombre: "Plazo Para Respuesta A Prevención",
              valor: plazoRespuestaPrevencion,
            },
            {
              nombre: "Plazo De Respuesta",
              valor: plazoRespuesta,
            },
            {
              nombre: "Plazo Máximo De Respuesta",
              valor: plazoMaximoRespuesta,
            },
            {
              nombre: "Nombre De La Resolución",
              valor: resolucion,
            },
            {
              nombre: "Link",
              valor: regulacionLink,
            },
            {
              nombre: "Referencia",
              valor: pdfReferencia,
            },
            {
              nombre: "Requisitos",
              valor: pdfRequisitos,
            },
          ],
        },
        { withCredentials: true }
      );
      console.log(response);
      return { msg: response.data.message, error: false };
    } catch (error) {
      return { msg: error.response.data.error, error: true };
    }
  };

  //eliminar tramite

  // cargar excel
  const cargarExcel = async (archivo) => {
    try {
      const response = await axiosClient.post(
        "/tramiteController/cargarArchivo",
        archivo,
        { withCredentials: true }
      );
      console.log(response);
      return { msg: response.data.message, error: false };
    } catch (error) {
      console.log(error);
      return { msg: error.response.data.message, error: true };
    }
  };

  const descargarTramite = async (_id) => {
    try {
      const response = await axiosClient.post(`/pdf/${_id}`, {
        withCredentials: true,
      });
      return { msg: response.data.message, error: false };
      // console.log(response.data.message);
    } catch (error) {
      return { msg: error.response.data.error, error: true };
      // console.log(error.response.data.error);
    }
  };

  return (
    <TramiteContext.Provider
      value={{
        selectedItem,
        setSelectedItem,
        cargarExcel,
        crearTramite,
        editarTramite,
        consultarTramites,
        buscarTramite,
        descargarTramite,
      }}
    >
      {children}
    </TramiteContext.Provider>
  );
};

export { TramiteProvider };

export default TramiteContext;
