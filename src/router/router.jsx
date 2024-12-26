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
import UpdatePost from "../pages/updatePost/UpdatePost";
import BeVolunteer from "../pages/beAVolunteer/BeVolunteer";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element:<Home></Home>,
            loader: () => fetch("https://assignment-server-ochre-eight.vercel.app/post/upcoming")
        },
        {
          path:"/addPost",
          element:<PrivateRoute><AddPost></AddPost></PrivateRoute>,
        },
        {
            path: "/allPosts",
            element: <AllPost></AllPost>,
            loader : () => fetch("https://assignment-server-ochre-eight.vercel.app/posts"),
        },
        {
          path: "/PostDetails/:id",
          element: <PrivateRoute><PostDetails></PostDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment-server-ochre-eight.vercel.app/posts/${params.id}`),
        },
        {
          path: "/beVolunteer/:id",
          element: <PrivateRoute><BeVolunteer></BeVolunteer></PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment-server-ochre-eight.vercel.app/posts/${params.id}`),
        },
        {
          path: "/myPosts/:email",
          element:<PrivateRoute><MyPosts></MyPosts></PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment-server-ochre-eight.vercel.app/posts/email/${params.email}`),
        },
        {
          path: "/updatePost/:id",
          element:<PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>,
          loader:({params}) => fetch(`https://assignment-server-ochre-eight.vercel.app/posts/${params.id}`),
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
