import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/home/home.routes";
import "./App.scss";

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage />
  }
]);


const App  = () => {
  return (
    <RouterProvider router={router}/>
  );
}


export default App;