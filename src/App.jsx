import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/cart';
import WishList from './pages/WishList';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            {/* <Route index element={<Navigate replace to="/" />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<WishList />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
