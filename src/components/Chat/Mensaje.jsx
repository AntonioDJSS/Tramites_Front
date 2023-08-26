
const Mensaje = ({ text, type }) => {
  const messageStyle =
    type === "user"
      ? "bg-gray-100 text-right"
      : "bg-blue-100 ";

  return (
    <div className={`rounded text-lg p-2 mb-2 shadow ${messageStyle}`}>
      {text}
    </div>
  );
};

export default Mensaje;
