
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements, BrowserRouter,
} from 'react-router-dom';
import Main from "../pages/Main/Main";
import Test from "../pages/Main/Test";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path="/" element={<Main />} />
      <Route path="test" element={<Test />} />
    </Route>
  )
);

export function RoutingProvider() {
  return <RouterProvider router={router} />;
}
