import { useQuery } from 'react-query';
import { getItems } from '../services/itemsApi';
import Spinner from '../ui/Spinner';
import CategoryItem from '../ui/CategoryItem';

function Men() {
  const { data, isLoading } = useQuery({
    queryKey: ['item'],
    queryFn: getItems,
  });

  if (isLoading) return <Spinner />;

  const menItems = data?.products.filter((el) => el.gender[0] === 'men');

  return (
    <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {menItems.map((el, i) => (
        <CategoryItem item={el} key={i} />
      ))}
    </div>
  );
}

export default Men;
