import { useQuery } from 'react-query';
import { getItems } from '../services/itemsApi';
import Spinner from './Spinner';
import CategoryItem from './CategoryItem';
function Catogories() {
  const { isLoading, data: catogories } = useQuery({
    queryKey: ['item'],
    queryFn: getItems,
  });

  if (isLoading) return <Spinner />;
  return (
    <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {catogories.trending.map((el, i) => (
        <CategoryItem item={el} key={i} />
      ))}
    </div>
  );
}

export default Catogories;
