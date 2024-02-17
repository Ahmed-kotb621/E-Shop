import RatingBar from './RatingBar';

function Details({ brand, year, name, rating, designer, gender }) {
  return (
    <div className="mt-8 flex flex-col    border-t p-8 text-sm">
      <div>
        <h1 className="text-lg font-bold">Details</h1>
        <table className="mt-3 table-auto border border-greyC">
          <thead>
            <tr className="table-auto border border-greyC ">
              <th className="table-auto border border-greyC p-2">Brand</th>
              <th className="table-auto border border-greyC p-2">Name</th>
              <th className="table-auto border border-greyC p-2">Year</th>
              <th className="table-auto border border-greyC p-2">Designer</th>
              <th className="table-auto border border-greyC p-2">Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-auto border border-greyC  p-2 text-sm ">
                {brand}
              </td>
              <td className="table-auto border border-greyC p-2 text-sm ">
                {name}
              </td>
              <td className="table-auto border border-greyC p-2 text-sm ">
                {' '}
                {year}
              </td>
              <td className="table-auto border border-greyC p-2 text-sm ">
                {designer}
              </td>
              <td className="table-auto border border-greyC p-2 text-sm ">
                {gender}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="text-lg font-bold">Review</h1>
        {rating.map((el, i) => (
          <RatingBar key={i} width={el} rate={el} />
        ))}
      </div>
    </div>
  );
}

export default Details;
