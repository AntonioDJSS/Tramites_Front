import { PropagateLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center ">
      <PropagateLoader color="#3366CC" size={35} />
    </div>
  );
};

export default Loading;
