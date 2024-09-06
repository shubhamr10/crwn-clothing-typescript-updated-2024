import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/home/home.routes";
import "./App.scss";
import Navigation from "./routes/navigation/navigation.routes";
import SignIn from "./routes/sign-in/sign-in.routes";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Navigation />,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:"sign-in",
        element:<SignIn/>
      }
    ]
  }
]);


const App  = () => {
  return (
    <RouterProvider router={router}/>
  );
}


export default App;