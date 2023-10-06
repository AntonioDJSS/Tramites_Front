import { Link } from "react-router-dom";

export default function Pagination({ anteriorPage, siguientePage, paginate }) {
  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-0"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Mostrando resultados de la página{" "}
          <span className="font-medium">{paginate}</span>
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        {paginate > 1 && (
          <Link
            onClick={() => anteriorPage()}
            className="relative inline-flex items-center rounded-3xl duration-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus-visible:outline-offset-0"
          >
            Anterior
          </Link>
        )}
        <Link
          onClick={() => siguientePage()}
          className="relative ml-3 inline-flex items-center rounded-3xl duration-200 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-200 focus-visible:outline-offset-0"
        >
          Siguiente
        </Link>
      </div>
    </nav>
  );
}
