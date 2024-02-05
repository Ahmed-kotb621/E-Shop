import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
function AppLayout() {
  return (
    <div>
      <Header />
      <main className="lg:px-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
