import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../Components/Home';
import AllApps from '../Components/AllApps';
import Installation from '../Components/Installation';
import AppDetails from '../Components/AppDetails';
import NotFound from '../Components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/apps',
        element: <AllApps />
      },
      {
        path: '/app/:id',
        element: <AppDetails />
      },
      {
        path: '/installation',
        element: <Installation />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

export default router;
