import { useQuery } from 'react-query';
import { getItems } from '../services/itemsApi';
import Spinner from '../ui/Spinner';
import CategoryItem from '../ui/CategoryItem';

function Women() {
  const { data, isLoading } = useQuery({
    queryKey: ['item'],
    queryFn: getItems,
  });

  if (isLoading) return <Spinner />;

  const menItems = data?.products.filter((el) => el.gender[0] === 'women');
  console.log(menItems);
  return (
    <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {menItems.map((el, i) => (
        <CategoryItem
          name={el.name}
          image={el.grid_picture_url}
          price={el.retail_price_cents}
          color={el.color}
          gender={el.gender[0]}
          id={el.id}
          key={i}
        />
      ))}
    </div>
  );
}

export default Women;
