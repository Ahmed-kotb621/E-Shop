import Carousel from '../ui/Carousel ';
import Catogories from '../ui/Catogories';
import Heading from '../ui/Heading';

function Home() {
  return (
    <div className="p-8">
      <Carousel />
      <Heading text="Categories" />
      <Catogories />
    </div>
  );
}

export default Home;
