import { FaArrowTrendUp } from 'react-icons/fa6';

function Heading({ text }) {
  return (
    <div className="flex items-center justify-center space-x-2 py-7 ">
      <h1 className="text-2xl font-semibold text-mainC">{text}</h1>
      <span className="text-2xl font-bold text-yellowC">
        {' '}
        <FaArrowTrendUp />
      </span>
    </div>
  );
}

export default Heading;
