
const Mensaje = ({ text, type }) => {
  const messageStyle =
    type === "user"
      ? "bg-gray-100 ml-96 text-right"
      : "bg-red-50 mr-96";

  return (
    <div className={`rounded text-lg p-2 mb-2 shadow ${messageStyle}`}>
      {text}
    </div>
  );
};

export default Mensaje;
