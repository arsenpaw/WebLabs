
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements, BrowserRouter,
} from 'react-router-dom';
import Main from "../pages/Main/Main";
import Dashboard from "../pages/Main/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path="/" element={<Main />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);

export function RoutingProvider() {
  return <RouterProvider router={router} />;
}
