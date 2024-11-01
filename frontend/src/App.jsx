import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import index from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <index />,
  }
])

function App() {
  return <RouterProvider router={router} />
   
}

export default App


