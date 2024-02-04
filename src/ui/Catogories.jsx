import { useQuery } from 'react-query';
import { getCatogories } from '../services/categoryApi';
import Spinner from './Spinner';
import CategoryItem from './CategoryItem';
import fahionImage from '../assets/images/fashion.png';
import electronicsImage from '../assets/images/electronics.png';
import groceryImage from '../assets/images/grocery.png';
function Catogories() {
  const colors = ['#f0e8d5', '#ecffec', '#e7eaf3'];
  const images = [groceryImage, electronicsImage, fahionImage];
  const { isLoading, data: catogories } = useQuery({
    queryKey: ['catogories'],
    queryFn: getCatogories,
  });

  if (isLoading) return <Spinner />;
  console.log(catogories.trending);
  return (
    <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {catogories.trending.map((el, i) => (
        <CategoryItem
          name={el.name}
          image={el.grid_picture_url}
          price={el.retail_price_cents}
          key={i}
        />
      ))}
    </div>
  );
}

export default Catogories;
