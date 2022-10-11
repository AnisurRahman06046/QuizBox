import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./components/Home/Home";
import Topics from "./components/Topics/Topics";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/topics", element: <Topics></Topics> },
        { path: "/blog", element: <Blog></Blog> },
      ],
    },
    { path: "*", element: <Error></Error> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
