import { useEffect, useState } from 'react';

function Catogories() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getCatogories() {
      const res = await fetch(
        `https://ahmed-kotb621.github.io/host_api/data.json`,
      );
      const data = await res.json();
      const result = data.productData;
      setData(result);
    }
    getCatogories();
  }, []);

  return <div>{data.map((el) => console.log(el.cat_name))}</div>;
}

export default Catogories;
