import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getItems } from '../services/itemsApi';
import Spinner from '../ui/Spinner';
import ItemDetails from '../ui/ItemDetails';

function Item() {
  const { id } = useParams();
  const { isLoading, data: items } = useQuery({
    queryKey: ['item'],
    queryFn: getItems,
  });

  if (isLoading) return <Spinner />;

  const allItems = items?.products || [];
  const item = allItems.find((el) => el.id === parseInt(id));

  return (
    <div className="p-8">
      <ItemDetails item={item} />
    </div>
  );
}

export default Item;
