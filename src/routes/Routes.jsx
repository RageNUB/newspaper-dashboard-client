import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import DashBoardHome from "../pages/Dashboard/DashBoardHome";
import UserManagement from "../pages/Dashboard/UserManagement";
import ManageUser from "../pages/Dashboard/ManageUser";
import PostManagement from "../pages/Dashboard/PostManagement";
import ManagePost from "../pages/Dashboard/ManagePost";
import Login from "../pages/Login/Login";
import AuthorManagement from "../pages/Dashboard/AuthorManagement";
import ManageAuthor from "../pages/Dashboard/ManageAuthor"
import CategoryManagement from "../pages/Dashboard/CategoryManagement";
import ManageCategory from "../pages/Dashboard/ManageCategory";
import Hello from "../pages/Dashboard/Hello";
import Update_author from "../pages/Dashboard/Update_author";
import Update_Category from "../pages/Dashboard/Update_Category";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "",
        element: <DashBoardHome></DashBoardHome>,
      },
      {
        path: "home",
        element: <DashBoardHome></DashBoardHome>,
      },
      {
        path: "user-management",
        element: <UserManagement></UserManagement>,
        children: [
          {
            path: "",
            element: <ManageUser></ManageUser>,
          }
        ],
      },
      {
        path: "post-management",
        element: <PostManagement></PostManagement>,
        children: [
          {
            path: "",
            element: <ManagePost></ManagePost>,
          },
          {
            path:":id",
            element:<Hello></Hello>
          }
        ],
      },
      {
        path: "author-management",
        element: <AuthorManagement></AuthorManagement>,
        children: [
          {
            path: "",
            element: <ManageAuthor></ManageAuthor>,
          },
          {
            path:":id",
            element:<Update_author></Update_author>
          }
        ],
      },
      {
        path: "category-management",
        element: <CategoryManagement></CategoryManagement>,
        children: [
          {
            path: "",
            element: <ManageCategory></ManageCategory>,
          },
          {
            path:":id",
            element:<Update_Category></Update_Category>
          }
        ],
      },

    ]
  }

  // {
  //   peth: "/login",
  //   element: <Login></Login>
  // },
  // {
  //   path: "/",
  //   element: <Dashboard></Dashboard>,
  //   children: [
  //     {
  //       path: "/",
  //       element: <DashBoardHome></DashBoardHome>,
  //     },
  //     {
  //       path: "user-management",
  //       element: <UserManagement></UserManagement>,
  //       children: [
  //         {
  //           path: "",
  //           element: <ManageUser></ManageUser>,
  //         }
  //       ],
  //     },
  //     {
  //       path: "post-management",
  //       element: <PostManagement></PostManagement>,
  //       children: [
  //         {
  //           path: "",
  //           element: <ManagePost></ManagePost>,
  //         },
  //       ],
  //     },
  //   ],
  // },
]);

export default router;
