import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import useTramite from "../../../hooks/useTramite";
import Alerta from "../../Alerta";

const pages = [{ name: "Crear trámite", href: "#", current: false }];

const Crear = () => {
  const opcionesTipo = [
    {
      tipo: "Informe",
    },
    {
      tipo: "Aviso",
    },
    {
      tipo: "Solicitud",
    },
    {
      tipo: "Pago",
    },
  ];

  const opcionesPeriodo = [
    {
      tipo: "Desarrollo",
    },
    {
      tipo: "Exploración",
    },
    {
      tipo: "Exploración y Desarrollo",
    },
    {
      tipo: "ETA",
    },
    {
      tipo: "ETA, Exploración",
    },
    {
      tipo: "Cierre",
    },
    {
      tipo: "Exploración, Desarrollo y Cierre",
    },
    {
      tipo: "ETA, Exploración y Desarrollo",
    },
    {
      tipo: "TODAS",
    },
  ];

  const { crearTramite } = useTramite();

  const [alerta, setAlerta] = useState({});
  const [tipo, setTipo] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [etaSinTransicion, setEtaSinTransicion] = useState("");
  const [etaConTransicion, setEtaConTransicion] = useState("");
  const [antesExploracion, setAntesExploracion] = useState("");
  const [exploracionEvaluacionPotencial, setExploracionEvaluacionPotencial] =
    useState("");
  const [
    exploracionIncorporacionReservas,
    setExploracionIncorporacionReservas,
  ] = useState("");
  const [exploracionProgramaEvaluacion, setExploracionProgramaEvaluacion] =
    useState("");
  const [revaluacion, setRevaluacion] = useState("");
  const [produccionTemprana, setProduccionTemprana] = useState("");
  const [antesDesarrollo, setAntesDesarrollo] = useState("");
  const [antesInicioProduccion, setAntesInicioProduccion] = useState("");
  const [produccionRegular, setProduccionRegular] = useState("");
  const [abandono, setAbandono] = useState("");
  const [devolucionArea, setDevolucionArea] = useState("");
  const [regulacion, setRegulacion] = useState("");
  const [regulacionCorto, setRegulacionCorto] = useState("");
  const [articuloNumeral, setArticuloNumeral] = useState("");
  const [dependencias, setDependencias] = useState("");
  const [detonante, setDetonante] = useState("");
  //radio
  const [aguasProfundas, setAguasProfundas] = useState("");
  //radio
  const [aguasSomeras, setAguasSomeras] = useState("");
  //radio
  const [terrestres, setTerrestres] = useState("");
  const [presentacion, setPresentacion] = useState("");
  const [nombre, setNombre] = useState("");
  const [nombreConamer, setNombreConamer] = useState("");
  const [numeroConamer, setNumeroConamer] = useState("");
  const [nombreFormato, setNombreFormato] = useState("");
  const [homoClaveFormatoConamer, setHomoClaveFormatoConamer] = useState("");
  const [periodicidad, setPeriodicidad] = useState("");
  const [plazoPresentar, setPlazoPresentar] = useState("");
  const [sujetoRespuestaRadios, setSujetoRespuestaRadios] = useState("");
  const [plazoMaximoRespuestaResolucion, setPlazoMaximoRespuestaResolucion] =
    useState("");
  const [montosDerechosRadios, setMontosDerechosRadios] = useState("");
  const [nombreAprovechamiento, setNombreAprovechamiento] = useState("");
  const [monto, setMonto] = useState();
  const [comentarios, setComentarios] = useState("");
  const [revision, setRevision] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [fechaMaximaResolucion, setFechaMaximaResolucion] = useState("");
  const [fechaMinimaResolucion, setFechaMinimaResolucion] = useState("");
  const [plazoPrevencion, setPlazoPrevencion] = useState("");
  const [plazoRespuestaPrevencion, setPlazoRespuestaPrevencion] = useState();
  const [plazoRespuesta, setPlazoRespuesta] = useState("");
  const [plazoMaximoRespuesta, setPlazoMaximoRespuesta] = useState("");
  const [resolucion, setResolucion] = useState("");
  const [regulacionLink, setRegulacionLink] = useState("");
  const [pdfReferencia, setPdfReferencia] = useState("");
  const [pdfRequisitos, setPdfRequisitos] = useState("");

  // const [imagen1, setImagen1] = useState();
  // const [imagen2, setImagen2] = useState();

  console.log(nombre);

  const handleSumbit = async (e) => {
    e.preventDefault();

    // validacion del formulario inputs
    if ([nombre].includes("")) {
      setAlerta({
        msg: "El nombre es obligatorio",
        error: true,
      });
      return;
    }

    setAlerta({});
    const { msg, error } = await crearTramite(
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
    );

    setAlerta({
      msg,
      error,
    });
  };

  const { msg } = alerta;

  return (
    <>
      {msg && <Alerta alerta={alerta} />}
      <div className="">
        {/* Page title & actions */}
        <div className="px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="min-w-0 flex-1 border-b border-gray-200 pb-4">
            {/* Navegacion Interna */}
            <nav className="flex justify-between" aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-4">
                <li>
                  <div>
                    <a className="text-slate-900/[0.8]">
                      <HomeIcon
                        className="h-5 w-5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Home</span>
                    </a>
                  </div>
                </li>
                {pages.map((page) => (
                  <li key={page.name}>
                    <div className="flex items-center">
                      <ChevronRightIcon
                        className="h-5 w-5 flex-shrink-0 text-slate-900/[0.8]"
                        aria-hidden="true"
                      />
                      <a
                        href={page.href}
                        className="ml-4 text-sm font-medium text-slate-900/[0.8]"
                        aria-current={page.current ? "page" : undefined}
                      >
                        {page.name}
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="flex flex-wrap items-start col-span-12 intro-y sm:flex-nowrap"></div>
            <div className="border hover:drop-shadow-2xl border-black/10 p-6 my-8 duration-300 bg-white">
              <form className="" onSubmit={handleSumbit}>
                {/* INPUTS  px-4 py-5 sm:p-6 */}
                <div className="bg-white ">
                  <div className="grid grid-cols-8 gap-3 border-gray-200">
                    {/* Input de seleccion de "Tipo" */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="tipo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Tipo:
                      </label>
                      <select
                        id="tipo"
                        name="tipo"
                        className="mt-2 pl-2 block w-full rounded-md border-0 bg-white py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                      >
                        {opcionesTipo.map((op, i) => (
                          <option key={i + 1} value={op.tipo}>
                            {op.tipo}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Input de seleccion de "periodo" */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="periodo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Periodo:
                      </label>
                      <select
                        id="periodo"
                        name="periodo"
                        className="mt-2 pl-2 block w-full rounded-md border-0 bg-white py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        value={periodo}
                        onChange={(e) => setPeriodo(e.target.value)}
                      >
                        {opcionesPeriodo.map((op, i) => (
                          <option key={i + 1} value={op.tipo}>
                            {op.tipo}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* input de ETA SIN TRANSICIÓN */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="eta-sin-transicion"
                      >
                        ETA sin transición
                      </label>
                      <input
                        type="number"
                        name="eta-sin-transicion"
                        id="eta-sin-transicion"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={etaSinTransicion}
                        onChange={(e) => setEtaSinTransicion(e.target.value)}
                      />
                    </div>
                    {/* inpput de ETA CON TRANSICIÓN */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="eta-con-transicion"
                      >
                        ETA con transición
                      </label>
                      <input
                        type="number"
                        name="eta-con-transicion"
                        id="eta-con-transicion"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={etaConTransicion}
                        onChange={(e) => setEtaConTransicion(e.target.value)}
                      />
                    </div>
                    {/* inpput de ANTES DE EXPLORACIÓN */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="antes-exploracion"
                      >
                        Antes de exploración
                      </label>
                      <input
                        type="number"
                        name="antes-exploracion"
                        id="antes-exploracion"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={antesExploracion}
                        onChange={(e) => setAntesExploracion(e.target.value)}
                      />
                    </div>
                    {/* inpput de EXPLORACIÓN (EVALUACIÓN DE POTENCIAL) */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="exploracion-potencial"
                      >
                        Exploración (Evaluación de potencial)
                      </label>
                      <input
                        type="number"
                        name="exploracion-potencial"
                        id="exploracion-potencial"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={exploracionEvaluacionPotencial}
                        onChange={(e) =>
                          setExploracionEvaluacionPotencial(e.target.value)
                        }
                      />
                    </div>
                    {/* inpput de EXPLORACIÓN (INCORPORACION DE RESERVAS) */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="exploracion-reservas"
                      >
                        Exploración (Incorporación de reservas)
                      </label>
                      <input
                        type="number"
                        name="exploracion-reservas"
                        id="exploracion-reservas"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={exploracionIncorporacionReservas}
                        onChange={(e) =>
                          setExploracionIncorporacionReservas(e.target.value)
                        }
                      />
                    </div>
                    {/* inpput de EXPLORACIÓN (PROGRAMA DE  EVALUACIÓN) */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="exploracion-evaluacion"
                      >
                        Exploración (Programa de evaluación)
                      </label>
                      <input
                        type="number"
                        name="exploracion-evaluacion"
                        id="exploracion-evaluacion"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={exploracionProgramaEvaluacion}
                        onChange={(e) =>
                          setExploracionProgramaEvaluacion(e.target.value)
                        }
                      />
                    </div>
                    {/* inpput de REVALUACIÓN */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="revaluacion"
                      >
                        Revaluación
                      </label>
                      <input
                        type="number"
                        name="revaluacion"
                        id="revaluacion"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={revaluacion}
                        onChange={(e) => setRevaluacion(e.target.value)}
                      />
                    </div>
                    {/* inpput de PRODUCCIÓN TEMPRANA */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="produccion-temprana"
                      >
                        Producción temprana
                      </label>
                      <input
                        type="number"
                        name="produccion-temprana"
                        id="produccion-temprana"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={produccionTemprana}
                        onChange={(e) => setProduccionTemprana(e.target.value)}
                      />
                    </div>
                    {/* inpput de ANTES DE DESARROLLO */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="antes-desarrollo"
                      >
                        Antes de desarrollo
                      </label>
                      <input
                        type="number"
                        name="antes-desarrollo"
                        id="antes-desarrollo"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={antesDesarrollo}
                        onChange={(e) => setAntesDesarrollo(e.target.value)}
                      />
                    </div>
                    {/* inpput de ANTES DE INICIO DE PRODUCCIÓN */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="antes-inicio-produccion"
                      >
                        Antes de inicio de producción
                      </label>
                      <input
                        type="number"
                        name="antes-inicio-produccion"
                        id="antes-inicio-produccion"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={antesInicioProduccion}
                        onChange={(e) =>
                          setAntesInicioProduccion(e.target.value)
                        }
                      />
                    </div>
                    {/* inpput de PRODUCCIÓN REGULAR */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="produccion-regular"
                      >
                        Producción regular
                      </label>
                      <input
                        type="number"
                        name="produccion-regular"
                        id="produccion-regular"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={produccionRegular}
                        onChange={(e) => setProduccionRegular(e.target.value)}
                      />
                    </div>
                    {/* inpput de Abandono */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="abandono"
                      >
                        Abandono
                      </label>
                      <input
                        type="number"
                        name="abandono"
                        id="abandono"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={abandono}
                        onChange={(e) => setAbandono(e.target.value)}
                      />
                    </div>
                    {/* inpput de DEVOLUCIÓN DEL ÁREA (ETF) */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="devolucion-area"
                      >
                        Devolución del arrea (ETF)
                      </label>
                      <input
                        type="number"
                        name="devolucion-area"
                        id="devolucion-area"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={devolucionArea}
                        onChange={(e) => setDevolucionArea(e.target.value)}
                      />
                    </div>
                    {/* Input de Regulación */}
                    <div className="col-span-full  pb-5">
                      <label
                        htmlFor="regulacion"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Regulación:
                      </label>
                      <textarea
                        name="regulacion"
                        id="regulacion"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce la regulación"
                        value={regulacion}
                        onChange={(e) => setRegulacion(e.target.value)}
                      />
                    </div>
                    {/*  input REGULACIÓN CORTO */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        className="block text-sm font-medium leading-6 text-gray-900"
                        htmlFor="regulacion-corto"
                      >
                        Regulación corto
                      </label>
                      <input
                        type="text"
                        name="regulacion-corto"
                        id="regulacion-corto"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce el texto"
                        value={regulacionCorto}
                        onChange={(e) => setRegulacionCorto(e.target.value)}
                      />
                    </div>
                    {/* Input de Articulo */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="articulo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Artículo o numeral:
                      </label>
                      <input
                        type="text"
                        name="articulo"
                        id="articulo"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce el artículo"
                        value={articuloNumeral}
                        onChange={(e) => setArticuloNumeral(e.target.value)}
                      />
                    </div>
                    {/* Input de Autoridad */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="autoridad"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Dependencias:
                      </label>
                      <input
                        type="text"
                        name="autoridad"
                        id="autoridad"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Autoridad"
                        value={dependencias}
                        onChange={(e) => setDependencias(e.target.value)}
                      />
                    </div>
                    {/* Input de detonante */}
                    <div className="col-span-full  pb-5">
                      <label
                        htmlFor="detonante"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Detonante:
                      </label>
                      <textarea
                        name="detonante"
                        id="detonante"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce el detonante"
                        value={detonante}
                        onChange={(e) => setDetonante(e.target.value)}
                      />
                    </div>
                    {/* Radios aguas profundas */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="aguas-profundas"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ¿Aguas profundas?:
                      </label>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            name="aguas-profundas"
                            type="radio"
                            className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                            value="Sí"
                            checked={aguasProfundas === "Sí"}
                            onChange={(e) => setAguasProfundas(e.target.value)}
                          />
                          <span className="ml-3 block text-sm leading-6 text-gray-900">
                            Sí
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            name="aguas-profundas"
                            type="radio"
                            className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                            value="No"
                            checked={aguasProfundas === "No"}
                            onChange={(e) => setAguasProfundas(e.target.value)}
                          />
                          <span className="ml-3 block text-sm leading-6 text-gray-900">
                            No
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Radios aguas someras */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="someras"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ¿Aguas someras?:
                      </label>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            name="someras"
                            type="radio"
                            className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                            value="Sí"
                            checked={aguasSomeras === "Sí"}
                            onChange={(e) => setAguasSomeras(e.target.value)}
                          />
                          <span className="ml-3 block text-sm leading-6 text-gray-900">
                            Sí
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            name="someras"
                            type="radio"
                            className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                            value="No"
                            checked={aguasSomeras === "No"}
                            onChange={(e) => setAguasSomeras(e.target.value)}
                          />
                          <span className="ml-3 block text-sm leading-6 text-gray-900">
                            No
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Radios Terrestres */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="terrestres"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ¿Terrestres?:
                      </label>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            name="terrestres"
                            type="radio"
                            className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                            value="Sí"
                            checked={terrestres === "Sí"}
                            onChange={(e) => setTerrestres(e.target.value)}
                          />
                          <span className="ml-3 block text-sm leading-6 text-gray-900">
                            Sí
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            name="terrestres"
                            type="radio"
                            className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                            value="No"
                            checked={terrestres === "No"}
                            onChange={(e) => setTerrestres(e.target.value)}
                          />
                          <span className="ml-3 block text-sm leading-6 text-gray-900">
                            No
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Input de Presentación */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="presentacion"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Presentación:
                      </label>
                      <input
                        type="text"
                        name="presentacion"
                        id="presentacion"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce el texto"
                        value={presentacion}
                        onChange={(e) => setPresentacion(e.target.value)}
                      />
                    </div>
                    {/* Input de Nombre */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Nombre:
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce el nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>
                    {/* Input de Nombre conamer */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="nombre-conamer"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Nombre conamer:
                      </label>
                      <input
                        type="text"
                        name="nombre-conamer"
                        id="nombre-conamer"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce el nombre"
                        value={nombreConamer}
                        onChange={(e) => setNombreConamer(e.target.value)}
                      />
                    </div>
                    {/* Input de NÚMERO U HOMOCLAVE  DE TRÁMITE CONAMER */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="nombre-conamer"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Número u homoclave de trámite CONAMER:
                      </label>
                      <input
                        type="text"
                        name="nombre-conamer"
                        id="nombre-conamer"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce el nombre"
                        value={numeroConamer}
                        onChange={(e) => setNumeroConamer(e.target.value)}
                      />
                    </div>
                    {/* Input de Nombre formato */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="nombre-formato"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Nombre del formato:
                      </label>
                      <input
                        type="text"
                        name="nombre-formato"
                        id="nombre-formato"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce el nombre"
                        value={nombreFormato}
                        onChange={(e) => setNombreFormato(e.target.value)}
                      />
                    </div>

                    {/* Input de Homoclave */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="homoclave"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Homoclave:
                      </label>
                      <input
                        type="text"
                        name="homoclave"
                        id="homoclave"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce la homoclave"
                        value={homoClaveFormatoConamer}
                        onChange={(e) =>
                          setHomoClaveFormatoConamer(e.target.value)
                        }
                      />
                    </div>
                    {/* Input de periodicidad */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="periodicidad"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Periodicidad:
                      </label>
                      <input
                        type="text"
                        name="periodicidad"
                        id="periodicidad"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce el texto"
                        value={periodicidad}
                        onChange={(e) => setPeriodicidad(e.target.value)}
                      />
                    </div>

                    {/* Input de Plazo para presentar */}
                    <div className="col-span-full  pb-5">
                      <label
                        htmlFor="plazo-presentar"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Plazo para presentar:
                      </label>
                      <textarea
                        name="plazo-presentar"
                        id="plazo-presentar"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce el plazo"
                        value={plazoPresentar}
                        onChange={(e) => setPlazoPresentar(e.target.value)}
                      />
                    </div>

                    {/* Radios sujeto a respuesta */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Sujeto a respuesta:
                      </label>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            name="sujeto-respuesta"
                            type="radio"
                            className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                            value="Sí"
                            checked={sujetoRespuestaRadios === "Sí"}
                            onChange={(e) =>
                              setSujetoRespuestaRadios(e.target.value)
                            }
                          />
                          <span className="ml-3 block text-sm leading-6 text-gray-900">
                            Sí
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            name="sujeto-respuesta"
                            type="radio"
                            className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                            value="No"
                            checked={sujetoRespuestaRadios === "No"}
                            onChange={(e) =>
                              setSujetoRespuestaRadios(e.target.value)
                            }
                          />
                          <span className="ml-3 block text-sm leading-6 text-gray-900">
                            No
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Input de PLAZO MÁXIMO PARA RESPUESTA O RESOLUCIÓN */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="plazo-maximo-respuesta-resolucion"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Plazo máximo para respuesta o resolución:
                      </label>
                      <input
                        type="text"
                        name="plazo-maximo-respuesta-resolucion"
                        id="plazo-maximo-respuesta-resolucion"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Plazo"
                        value={plazoMaximoRespuestaResolucion}
                        onChange={(e) =>
                          setPlazoMaximoRespuestaResolucion(e.target.value)
                        }
                      />
                    </div>

                    {/* radios de TIENE MONTO DE DERECHOS O APROVECHAMIENTOS? */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        ¿Tiene monto de derechos o aprovechamientos?:
                      </label>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            name="monto-derechos"
                            type="radio"
                            className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                            value="Sí"
                            checked={montosDerechosRadios === "Sí"}
                            onChange={(e) =>
                              setMontosDerechosRadios(e.target.value)
                            }
                          />
                          <span className="ml-3 block text-sm leading-6 text-gray-900">
                            Sí
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input
                            name="monto-derechos"
                            type="radio"
                            className="h-4 w-4 text-[#c2104c] transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                            value="No"
                            checked={montosDerechosRadios === "No"}
                            onChange={(e) =>
                              setMontosDerechosRadios(e.target.value)
                            }
                          />
                          <span className="ml-3 block text-sm leading-6 text-gray-900">
                            No
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Input de Nombre del aprovechamiento */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="nombre-aprovechamiento"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Nombre del aprovechamiento:
                      </label>
                      <input
                        type="text"
                        name="nombre-aprovechamiento"
                        id="nombre-aprovechamiento"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce el nombre"
                        value={nombreAprovechamiento}
                        onChange={(e) =>
                          setNombreAprovechamiento(e.target.value)
                        }
                      />
                    </div>
                    {/* Input de monto */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="monto"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Monto (MXN):
                      </label>
                      <input
                        type="number"
                        name="monto"
                        id="monto"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce una cantidad"
                        value={monto}
                        onChange={(e) => setMonto(e.target.value)}
                      />
                    </div>
                    {/* Input de Comenttarios */}
                    <div className="col-span-full  pb-5">
                      <label
                        htmlFor="comentarios"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Comentarios:
                      </label>
                      <textarea
                        name="comentarios"
                        id="comentarios"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce los comentarios"
                        value={comentarios}
                        onChange={(e) => setComentarios(e.target.value)}
                      />
                    </div>

                    {/* Input de revisión */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="revision"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Revisión:
                      </label>
                      <input
                        type="date"
                        name="revision"
                        id="revision"
                        autoComplete="family-name"
                        className="mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        value={revision}
                        onChange={(e) => setRevision(e.target.value)}
                      />
                    </div>

                    {/* Input de fecha Ingreso */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="fecha-ingreso"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Fecha de ingreso:
                      </label>
                      <input
                        type="date"
                        name="fecha-ingreso"
                        id="fecha-ingreso"
                        autoComplete="family-name"
                        className="mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        value={fechaIngreso}
                        onChange={(e) => setFechaIngreso(e.target.value)}
                      />
                    </div>
                    {/* Input de Fecha Maxima de Resolución */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="fecha-maxima-resolucion"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Fecha Maxima de Resolución:
                      </label>
                      <input
                        type="date"
                        name="fecha-maxima-resolucion"
                        id="fecha-maxima-resolucion"
                        autoComplete="family-name"
                        className="mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        value={fechaMaximaResolucion}
                        onChange={(e) =>
                          setFechaMaximaResolucion(e.target.value)
                        }
                      />
                    </div>
                    {/* Input de Fecha Minima de Resolución */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="fecha-minima-resolucion"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Fecha minima de resolución:
                      </label>
                      <input
                        type="date"
                        name="fecha-minima-resolucion"
                        id="fecha-minima-resolucion"
                        autoComplete="family-name"
                        className="mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-slate-200 placeholder:text-slate-400/90 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        value={fechaMinimaResolucion}
                        onChange={(e) =>
                          setFechaMinimaResolucion(e.target.value)
                        }
                      />
                    </div>
                    {/* Input Plazo de Prevención */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="plazo-prevencion"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Plazo de Prevención:
                      </label>
                      <input
                        type="number"
                        name="plazo-prevencion"
                        id="plazo-prevencion"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={plazoPrevencion}
                        onChange={(e) => setPlazoPrevencion(e.target.value)}
                      />
                    </div>
                    {/* Input de Plazo para respuesta a Prevención */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="plazo-respuesta-prevencion"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Plazo para respuesta a Prevención:
                      </label>
                      <input
                        type="number"
                        name="plazo-respuesta-prevencion"
                        id="plazo-respuesta-prevencion"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={plazoRespuestaPrevencion}
                        onChange={(e) =>
                          setPlazoRespuestaPrevencion(e.target.value)
                        }
                      />
                    </div>

                    {/* input plazo respuesta */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="plazo-respuesta"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Plazo de respuesta:
                      </label>
                      <input
                        type="number"
                        name="plazo-respuesta"
                        id="plazo-respuesta"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={plazoRespuesta}
                        onChange={(e) => setPlazoRespuesta(e.target.value)}
                      />
                    </div>

                    {/* Input de Plazo Máximo de Respuesta */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="plazo-maximo-respuesta"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Plazo Máximo de Respuesta:
                      </label>
                      <input
                        type="number"
                        name="plazo-maximo-respuesta"
                        id="plazo-maximo-respuesta"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce un número"
                        value={plazoMaximoRespuesta}
                        onChange={(e) =>
                          setPlazoMaximoRespuesta(e.target.value)
                        }
                      />
                    </div>
                    {/* Input de resolución */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="resolucion"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Resolución:
                      </label>
                      <textarea
                        name="resolucion"
                        id="resolucion"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce la regulación"
                        value={resolucion}
                        onChange={(e) => setResolucion(e.target.value)}
                      />
                    </div>
                    {/* Input de regulación link */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="regulacion-link"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Link:
                      </label>
                      <input
                        type="url"
                        name="regulacion-link"
                        id="regulacion-link"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce el enlace"
                        value={regulacionLink}
                        onChange={(e) => setRegulacionLink(e.target.value)}
                      />
                    </div>
                    {/* input pdf referencia */}
                    <div className="col-span-full  lg:col-span-4 pb-5">
                      <label
                        htmlFor="referencia-pdf"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Referencia:
                      </label>
                      <input
                        type="url"
                        name="referencia-pdf"
                        id="referencia-pdf"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce el enlace"
                        value={pdfReferencia}
                        onChange={(e) => setPdfReferencia(e.target.value)}
                      />
                    </div>
                    {/* input pdf requisitos */}
                    <div className="col-span-full sm:col-span-3 md:col-span-4 pb-5">
                      <label
                        htmlFor="requisitos-pdf"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Requisitos:
                      </label>
                      <input
                        type="url"
                        name="requisitos-pdf"
                        id="requisitos-pdf"
                        autoComplete="given-name"
                        className="mt-2 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 transition duration-200 ease-in-out text-sm border-gray-900 placeholder:text-slate-400 focus:ring-4 focus:ring-[#8A0C35] focus:ring-opacity-20 focus:border-[#8A0C35] focus:border-opacity-40 !box"
                        placeholder="Introduce el enlace"
                        value={pdfRequisitos}
                        onChange={(e) => setPdfRequisitos(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* Boton para enviar */}
                  <button
                    type="submit"
                    className="bg-blue-400 button rounded-3xl duration-500 md:mb-0 py-3 px-8 hover:bg-slate-900 hover:duration-500"
                  >
                    <span className="text-white font-medium text-[15px]">
                      Crear tramíte
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crear;
