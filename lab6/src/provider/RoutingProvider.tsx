
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements, BrowserRouter,
} from 'react-router-dom';
import Main from "../pages/Main";
import Dashboard from "../pages/Dashboard";
import ProductCard from "../components/ProductCard";
import PrinterDetail from "../pages/Printer/[id]";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path="/" element={<Main />} />
      <Route path="dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<PrinterDetail />} />
    </Route>
  )
);

export function RoutingProvider() {
  return <RouterProvider router={router} />;
}
