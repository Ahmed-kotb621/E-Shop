import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/cart';
import WishList from './pages/WishList';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
import ItemDetails from './pages/Item';
import Men from './pages/Men';
import Women from './pages/Women';
import About from './pages/About';
import { Provider } from 'react-redux';
import { store } from '../store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});
function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              {/* <Route index element={<Navigate replace to="/" />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="wishlist" element={<WishList />} />
              <Route path="item/:id" element={<ItemDetails />} />
              <Route path="men" element={<Men />} />
              <Route path="women" element={<Women />} />
              <Route path="about" element={<About />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
