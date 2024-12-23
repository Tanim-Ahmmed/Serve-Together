import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import AllPost from "../pages/allPost/AllPost";
import PrivateRoute from "./PrivateRoute";
import AddPost from "../pages/addPost/AddPost";
import MyPosts from "../pages/myPosts/MyPosts";
import PostDetails from "../pages/postDetails/PostDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element:<Home></Home>,
        },
        {
            path: "/allPosts",
            element: <AllPost></AllPost>,
            loader : () => fetch("http://localhost:5000/posts"),
        },
        {
          path: "/PostDetails/:id",
          element: <PrivateRoute><PostDetails></PostDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/posts/${params.id}`),
        },
        {
           path:"/addPost",
           element:<PrivateRoute><AddPost></AddPost></PrivateRoute>,
        },
        {
          path: "/myPosts",
          element:<PrivateRoute><MyPosts></MyPosts></PrivateRoute>,
        },
        {
          path: "/register",
          element:<Register></Register>,
        },
        {
          path:  "/login",
          element:<Login></Login>,
        }
      ]
    },
  ]);

  export default router;
