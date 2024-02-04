import { FaArrowTrendUp } from 'react-icons/fa6';

function Heading({ text }) {
  return (
    <div className="flex items-center justify-center space-x-2 py-7 ">
      <h1 className="text-mainC text-2xl">{text}</h1>
      <span className="text-yellowC text-2xl font-bold">
        {' '}
        <FaArrowTrendUp />
      </span>
    </div>
  );
}

export default Heading;
