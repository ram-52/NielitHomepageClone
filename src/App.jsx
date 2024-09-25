import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
