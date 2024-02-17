import { useQuery } from 'react-query';
import { getItems } from '../services/itemsApi';
import Spinner from '../ui/Spinner';
import CategoryItem from '../ui/CategoryItem';
import Error from '../ui/Error';

function Women() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['item'],
    queryFn: getItems,
  });

  if (isLoading) return <Spinner />;

  if (isError || !data || !data.products) {
    return <Error />;
  }
  const menItems = data?.products.filter((el) => el.gender[0] === 'women');

  return (
    <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {menItems.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Women;
