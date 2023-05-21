import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />}>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
    </Route>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}
