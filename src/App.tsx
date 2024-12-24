import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import TransactionsPage from './pages/TransactionsPage';
import HomePage from './pages/HomePage';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* home route */}
        <Route path='/' element={<HomePage />} />

        {/* dashboard routes */}
        <Route path='/general/' element={<DashboardLayout />}>
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='transactions' element={<TransactionsPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
