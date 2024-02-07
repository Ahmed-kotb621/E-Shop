import RatingBar from './RatingBar';

function Details({ brand, year, name, rating, color, designer, gender }) {
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
      {/* <div className="w-full border-b text-lg font-semibold">
        <h1>Details</h1>
      </div>
      <div>
        <p>Brand : {brand}</p>
        <p>Year of realese : {year}</p>
        <p>Name : {name}</p>
        <p>Color : {color}</p>
        <p>Designer :{designer}</p>
        <p>Gender : {gender}</p>
      </div>
      <div>
        {rating.map((el, i) => (
          <progress
            value={el}
            max={10}
            key={i}
            className="m-2 block bg-greyC"
          />
        ))}
      </div> */}
    </div>
  );
}

export default Details;
