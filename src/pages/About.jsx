import { Link } from 'react-router-dom';
import image from '../assets/images/hero-img.png';

function About() {
  return (
    <div className="p-8">
      <div className="h">
        <img
          src={image}
          className="my-6 rounded-lg bg-secondaryC"
          width="350px"
        />
        <div>
          <h1 className="my-4 text-2xl font-bold">About Us</h1>
          <p className=" text-greyC">
            Welcome to Sneakers, where passion meets style and innovation.
            We&apos;re more than just a website. we&apos;re a community of
            sneaker enthusiasts, collectors, and trendsetters dedicated to
            celebrating the culture and artistry of sneakers.
          </p>
        </div>
        <div>
          <h1 className="my-4 text-2xl font-bold">Our Mission</h1>
          <p className="text-greyC">
            At <span>Sneakers</span>, our mission is simple: to provide
            sneakerheads worldwide with a premium platform where they can
            discover, shop, and connect. We strive to curate the latest and most
            sought-after sneaker releases while fostering a vibrant community
            where individuals can share their passion, knowledge, and stories.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link
          className="text-md my-10 rounded-full bg-yellowC px-5 py-2 font-semibold text-mainC hover:text-greyC"
          to="/"
        >
          Start Your Order now &rarr;
        </Link>
      </div>
    </div>
  );
}

export default About;
