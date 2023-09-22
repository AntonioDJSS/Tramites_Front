import axios from "axios";

const API_URL = "http://localhost:8080/api/tramiteController/mostrarTramitesTodo";

export const obtenerTramites = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los trámites:", error);
    throw error;
  }
};