import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../Components/Home';
import AllApps from '../Components/AllApps';
import Installation from '../Components/Installation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
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
        path: '/installation',
        element: <Installation />
      }
    ]
  }
]);

export default router;
